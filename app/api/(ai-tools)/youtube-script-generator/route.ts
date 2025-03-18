import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

export async function POST(request: any) {
  try {
    const { query } = await request.json();

    if (!query) {
      return NextResponse.json({ error: 'query is required' }, { status: 400 });
    }
    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: 'API key is required' },
        { status: 400 },
      );
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    // Updated prompt with an example and removed timestamps
    const prompt = `You are a YouTube creator and expert assistant specialized in content strategy.
    QUERY: ${query}
    
    Generate a detailed and engaging YouTube video script based on this query.
    
    The script should follow this structure:
    1. **Introduction** – Hook the audience, introduce the topic in an engaging way.
    2. **Main Content** – Break down key points with examples, explanations, and engaging storytelling.
    3. **Call to Action** – Encourage likes, comments, and subscriptions.
    4. **Conclusion** – Summarize key points and leave the audience with a strong takeaway.

    IMPORTANT: Do NOT include timestamps. The script should be structured as natural spoken dialogue.

    **Example Output Format:**  
   
    Hey adventurers! Have you ever dreamed of conquering gnarly trails and feeling the rush of true off-road riding? Today, we're diving deep into the Himalayan 450 – a bike that's been making waves in the off-road community. Is it truly great for off-roading? Let’s find out!  

    This isn't your grandma's commuter bike. The Himalayan 450 boasts a robust engine, delivering ample power and torque. This is crucial for tackling steep inclines, rocky terrain, and loose surfaces. I recently took it on a challenging trail in the [Mention specific location], and it handled everything I threw at it with ease. We’ll see some footage of that later!  

    Off-road riding is all about absorbing impacts. The Himalayan 450’s suspension system is designed to do just that. The long travel suspension soaks up bumps, rocks, and roots, keeping you comfortable and in control. Plus, the generous ground clearance means you can tackle obstacles most bikes would shy away from.  

    What are your thoughts on the Himalayan 450? Let me know in the comments below! Don’t forget to like this video if you found it helpful and subscribe for more off-road adventures. Hit the notification bell so you don’t miss out on future content.  

    So, is the Himalayan 450 great for off-roading? Absolutely! Its powerful engine, robust suspension, durable build, and comfortable ergonomics make it a fantastic choice for adventure riders. While it may not be suitable for every off-road style, it’s a versatile and reliable machine that can open up a world of off-road possibilities. Thanks for watching!  

    Generate the script in this format, replacing placeholders with relevant details based on the query. The output should be engaging, natural, and free from timestamps.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    let text = response.text();

    text = text
      .split('\n') // Split by new lines
      .map((line) => line.trim()) // Trim spaces from each line
      .filter((line) => line.length > 0) // Remove empty lines
      .join(' '); // Join lines into a single paragraph

    return NextResponse.json({ data: [text] });
  } catch (error) {
    console.error('Error querying Gemini API:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 },
    );
  }
}

