// Example: OpenAI API Integration for your website
// This shows how to use the current GPT-4 Turbo model

const OPENAI_API_KEY = process.env.OPENAI_API_KEY; // Store in environment variables

async function callOpenAI(prompt, model = "gpt-4-turbo-preview") {
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: model,
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant for Mihir Chavan's website, specializing in Excel, Jyotish, and professional services."
          },
          {
            role: "user",
            content: prompt
          }
        ],
        max_tokens: 1000,
        temperature: 0.7
      })
    });

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error('Error calling OpenAI API:', error);
    throw error;
  }
}

// Example usage for your services
async function generateExcelAdvice(userQuestion) {
  const prompt = `As an Excel expert, provide helpful advice for: ${userQuestion}`;
  return await callOpenAI(prompt);
}

async function generateJyotishInsight(userQuestion) {
  const prompt = `As a Jyotish practitioner, provide guidance for: ${userQuestion}`;
  return await callOpenAI(prompt);
}

// React component example
function AIChatWidget() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    
    setIsLoading(true);
    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    
    try {
      const response = await callOpenAI(input);
      const aiMessage = { role: 'assistant', content: response };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Failed to get AI response:', error);
    } finally {
      setIsLoading(false);
      setInput('');
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded-lg">
      <div className="space-y-4 mb-4">
        {messages.map((msg, index) => (
          <div key={index} className={`p-3 rounded ${
            msg.role === 'user' ? 'bg-blue-100 ml-8' : 'bg-gray-100 mr-8'
          }`}>
            {msg.content}
          </div>
        ))}
      </div>
      
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me about Excel, Jyotish, or my services..."
          className="flex-1 p-2 border rounded"
          disabled={isLoading}
        />
        <button
          onClick={sendMessage}
          disabled={isLoading}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
        >
          {isLoading ? 'Sending...' : 'Send'}
        </button>
      </div>
    </div>
  );
}

export { callOpenAI, generateExcelAdvice, generateJyotishInsight, AIChatWidget };

