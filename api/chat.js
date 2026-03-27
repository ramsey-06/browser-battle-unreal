import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({
        error: "Method not allowed",
      });
    }

    const { message } = req.body;

    const systemPrompt = `
You are a university student assistant.

You help with:
- Admissions
- Courses
- Fees
- Attendance
- Exams
- Timetable
- Campus services

Rules:

1) Be professional
2) Keep answers short
3) If unsure:

"Please contact the university administration."

4) If question is unrelated:

"I can assist only with university-related queries."
`;

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
    });

    const result = await model.generateContent(
      `${systemPrompt}\n\nStudent Question: ${message}`
    );

    const response = await result.response;

    res.status(200).json({
      reply: response.text(),
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Server error",
    });
  }
}