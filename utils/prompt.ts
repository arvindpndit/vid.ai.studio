export const getTitleGenerationPrompt = (query: string) => {
  return `You are a YouTube creator and expert assistant specialized in content strategy.
      QUERY: ${query}
      Generate 10 highly clickable, SEO-optimized YouTube video titles related to this query.
      IMPORTANT: Format your response as a JavaScript array of strings ONLY, with NO additional text, explanations, or formatting. Do not include any JSON syntax, backticks, or string indicators.
      Example of CORRECT format:
      React vs Next.js: ULTIMATE Showdown!
      React OR Next.js? Choose The RIGHT One!
      Next.js vs React: Which Is FASTER? (Test)
      Example of INCORRECT format:
      ["React vs Next.js: ULTIMATE Showdown!",
      "React OR Next.js? Choose The RIGHT One!"]
      or
      '''React vs Next.js: ULTIMATE Showdown!'''`;
};

export const getDescriptionGenerationPrompt = (query: string) => {
  return `You are a YouTube content expert. Based on the following topic, generate a compelling and SEO-friendly YouTube video description:
    
    QUERY: ${query}
    
    The description should:
    - Be engaging and informative.
    - Include key takeaways or highlights.
    - Encourage engagement (likes, comments, and subscriptions).
    - Be structured naturally, without timestamps.
    - Optionally include a short call-to-action (CTA).

    Example Output Format:
    
    "🚀 Want to master the art of off-road biking? In this video, we take the **Himalayan 450** on a thrilling adventure to test its power, suspension, and durability. 🏍️💨
    
    Whether you're a seasoned rider or just getting started, we'll break down its key features, handling, and real-world performance. Don't miss out on this exciting ride! 🌍🔥
    
    👉 Drop a comment below with your thoughts on the **Himalayan 450**!
    👍 Like this video if you found it helpful!
    🔔 Subscribe for more biking adventures and reviews!
    
    Generate a description in this format, making it concise, engaging, and SEO-friendly.`;
};

export const getKeywordGenerationPrompt = (query: string) => {
  return `You are a YouTube SEO expert specialized in keyword research and optimization.
        QUERY: ${query}
        Generate 10 high-performing keywords and keyword phrases related to this query that would help optimize YouTube videos for search. Include a mix of broad, medium, and long-tail keywords.
        IMPORTANT: Format your response with EXACTLY ONE keyword or keyword phrase per line, with NO quotation marks, NO brackets, NO numbering, and NO additional text. Keep each keyword or phrase concise and search-friendly.
        Example of CORRECT format:
        react tutorial
        learn react js
        react for beginners
        how to build react app
        react vs angular
        
        Example of INCORRECT format:
        ["react tutorial", "learn react js"]
        or
        "react tutorial"
        or
        1. react tutorial`;
};

export const getScriptGenerationPrompt = (query: string) => {
  return `You are a YouTube creator and expert assistant specialized in content strategy.
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
};

export const getChannelNameGenerationPrompt = (query: string) => {
  return `You are a YouTube creator and expert assistant specialized in content strategy.
    QUERY: ${query}
    Generate 10 catchy, memorable, and brand-friendly YouTube channel names related to this query.
    EXTREMELY IMPORTANT: Format your response with EXACTLY ONE channel name per line, with NO quotation marks, NO brackets, NO commas, and NO additional text. DO NOT return JSON or an array format under any circumstances.
    Example of CORRECT format:
    TechTalks Daily
    CodeMaster
    Digital Nomad Life
    
    Example of INCORRECT format:
    ["TechTalks Daily", "CodeMaster"]
    or
    "TechTalks Daily"
    or
    1. TechTalks Daily`;
};

export const getTagGenerationPrompt = (query: string) => {
  return `You are a YouTube creator and expert assistant specialized in content strategy.
        QUERY: ${query}
        Generate 10 relevant and trending YouTube tags related to this query in camel case.
        IMPORTANT: Format your response with EXACTLY ONE tag per line, with NO quotation marks, NO brackets, NO commas, and NO additional text or spacing.
        Example of CORRECT format:
        webDesign
        codingInterviews
        seoTips
        
        Example of INCORRECT format:
        ["webDesign"]
        or
        "webDesign"
        or
        1. webDesign`;
};
export const getVideoIdeasGenerationPrompt = (query: string) => {
  return `You are a YouTube creator and expert assistant specialized in content strategy.
        QUERY: ${query}
        Generate 10 engaging, trending YouTube video ideas related to this query. Include a brief description of what the video would cover.
        IMPORTANT: Format your response with EXACTLY ONE video idea per line, with NO quotation marks, NO brackets, NO commas, and NO additional text. Each line should have a title and a VERY brief description separated by a dash (-).
        Example of CORRECT format:
        How to Build a Portfolio Website in 1 Hour - Step-by-step guide using templates
        5 Web Design Trends for 2025 - Showcase of cutting-edge design elements
        Coding Interview Preparation Guide - Practice problems and solutions
        
        Example of INCORRECT format:
        ["How to Build a Portfolio Website in 1 Hour - Step-by-step guide using templates"]
        or
        "How to Build a Portfolio Website in 1 Hour"
        or
        1. How to Build a Portfolio Website in 1 Hour`;
};
export const a = (query: string) => {};

