import {
  getDescriptionGenerationPrompt,
  getKeywordGenerationPrompt,
  getScriptGenerationPrompt,
  getTitleGenerationPrompt,
} from '@/utils/prompt';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

export async function POST(request: any) {
  try {
    // Extract both title and content from the request
    const { query } = await request.json();

    // Check if content exists (content is the actual question)
    if (!query) {
      return NextResponse.json({ error: 'query is required' }, { status: 400 });
    }
    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: ' API key is required' },
        { status: 400 },
      );
    }

    // Initialize the Gemini API
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    // Create prompt
    const titleGenPrompt = getTitleGenerationPrompt(query);
    const descriptionGenPrompt = getDescriptionGenerationPrompt(query);
    const keywordGenPrompt = getKeywordGenerationPrompt(query);
    const scriptGenPrompt = getScriptGenerationPrompt(query);

    const processText = async (prompt: string, joinLines = false) => {
      const res = await model.generateContent(prompt);
      const text = await res.response.text();
      const lines = text
        .split('\n')
        .map((line) => line.trim())
        .filter(Boolean);
      return joinLines ? lines.join(' ') : lines;
    };

    const [title, keyword, description, script] = await Promise.all([
      processText(titleGenPrompt),
      processText(keywordGenPrompt),
      processText(descriptionGenPrompt, true),
      processText(scriptGenPrompt, true),
    ]);

    return NextResponse.json({ data: { title, keyword, description, script } });
  } catch (error) {
    console.error('Error querying Gemini API:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 },
    );
  }
}

