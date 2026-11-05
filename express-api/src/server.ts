import express, { Request, Response, NextFunction } from "express";

const app = express();
const PORT = 3000;

// Middleware to read JSON data
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }

  next();
});

// Courses data
const courses = [
  { id: 1, name: "JavaScript", instructor: "Ahmad" },
  { id: 2, name: "TypeScript", instructor: "Sara" },
  { id: 3, name: "React", instructor: "Omar" },
  { id: 4, name: "Node.js", instructor: "Lina" }
];

// GET /courses
app.get("/courses", (req: Request, res: Response) => {
  res.status(200).json(courses);
});

// POST /enrolments
app.post("/enrolments", (req: Request, res: Response) => {
  const { studentName, courseId } = req.body;

  // Validate input
  if (
    typeof studentName !== "string" ||
    studentName.trim() === "" ||
    typeof courseId !== "number" ||
    !Number.isInteger(courseId)
  ) {
    return res.status(400).json({
      error: "Invalid studentName or courseId"
    });
  }

  const courseExists = courses.some(course => course.id === courseId);

  if (!courseExists) {
    return res.status(400).json({
      error: "Course does not exist"
    });
  }

  res.status(201).json({
    message: "Enrolment successful",
    studentName: studentName.trim(),
    courseId
  });
});

// Handle unknown routes
app.use((req: Request, res: Response) => {
  res.status(404).json({ error: "Route not found" });
});

// Error handling middleware
app.use(
  (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
