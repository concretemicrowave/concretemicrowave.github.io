const express = require("express");
const fs = require("fs");
const path = require("path");
const { readSermons } = require("../utils/sermonUtils");

const router = express.Router();
const sermonsDir = path.join(__dirname, "..", "sermons");

// Ensure sermons folder exists
if (!fs.existsSync(sermonsDir)) {
  fs.mkdirSync(sermonsDir, { recursive: true });
}

// Auto-create a sample sermon if folder is empty
if (fs.readdirSync(sermonsDir).length === 0) {
  const sample = {
    date: "April 14, 2025",
    title: "The Power of Grace",
    description:
      "An inspiring sermon on how grace transforms our lives and relationships.",
    youtubeLink: "https://www.youtube.com/watch?v=-gftWjWE_Go",
    comments: [],
    likes: 0,
  };
  const samplePath = path.join(sermonsDir, "sample-sermon.json");
  fs.writeFileSync(samplePath, JSON.stringify(sample, null, 2));
}

console.log("Sermons folder created");

// Get all sermons
router.get("/", (req, res) => {
  res.json(readSermons());
});

// Get a specific sermon
router.get("/:filename", (req, res) => {
  const filePath = path.join(sermonsDir, req.params.filename);
  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: "Sermon not found" });
  }

  const data = fs.readFileSync(filePath);
  res.json(JSON.parse(data));
});

// Create a new sermon
router.post("/", (req, res) => {
  const sermon = req.body;
  if (!sermon.title) {
    return res.status(400).json({ error: "Missing sermon title" });
  }

  const filename = `${sermon.title.replace(/\s+/g, "-").toLowerCase()}.json`;
  const filePath = path.join(sermonsDir, filename);

  const fullData = {
    ...sermon,
    comments: [],
    likes: 0,
  };

  fs.writeFileSync(filePath, JSON.stringify(fullData, null, 2));
  res.status(201).json({ message: "Sermon created", filename });
});

// Add a comment to a sermon
router.post("/:filename/comments", (req, res) => {
  const filePath = path.join(sermonsDir, req.params.filename);
  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: "Sermon not found" });
  }

  const sermon = JSON.parse(fs.readFileSync(filePath));
  sermon.comments = sermon.comments || [];
  sermon.comments.push(req.body.comment || "No comment");

  fs.writeFileSync(filePath, JSON.stringify(sermon, null, 2));
  res.json({ message: "Comment added" });
});

// Like a sermon
router.post("/:filename/like", (req, res) => {
  const filePath = path.join(sermonsDir, req.params.filename);
  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: "Sermon not found" });
  }

  const sermon = JSON.parse(fs.readFileSync(filePath));
  sermon.likes = (sermon.likes || 0) + 1;

  fs.writeFileSync(filePath, JSON.stringify(sermon, null, 2));
  res.json({ message: "Sermon liked", likes: sermon.likes });
});

// Delete a sermon
router.delete("/:filename", (req, res) => {
  const filePath = path.join(sermonsDir, req.params.filename);
  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: "Sermon not found" });
  }

  fs.unlinkSync(filePath);
  res.json({ message: "Sermon deleted" });
});

module.exports = router;
