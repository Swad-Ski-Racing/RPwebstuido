import Fuse from "fuse.js";

const faqs = [
  {"id":1,"q":"Who is RP Web Studio?","a":"RP Web Studio is a small, efficient team that builds websites, apps, and AI customer service solutions for businesses, focusing on high quality and competitive prices."},
  {"id":2,"q":"What makes you different from big agencies?","a":"We have lower overheads, a leaner team, and a direct client-to-developer relationship, which means faster delivery and lower costs without cutting quality."},
  {"id":3,"q":"Where are you based?","a":"[Insert location], but we work with clients worldwide."},
  {"id":4,"q":"Do you work with small businesses or only large companies?","a":"We work with businesses of all sizes, from startups to established enterprises."},
  {"id":5,"q":"What services do you offer?","a":"Website design, app development, AI-powered customer service agents, custom integrations, and ongoing maintenance."},
  {"id":6,"q":"What is an AI agent, and how can it help my business?","a":"An AI agent is a chatbot or virtual assistant integrated into your site or app that can handle customer queries, take orders, and assist users 24/7."},
  {"id":7,"q":"Can you integrate AI into my existing website?","a":"Yes, we can integrate AI tools into existing sites without needing a full rebuild."},
  {"id":8,"q":"Do you only build websites, or do you build apps too?","a":"We build both — native apps for iOS & Android, and web apps that work across devices."},
  {"id":9,"q":"Do you offer e-commerce solutions?","a":"Yes, we can build and customise online stores, including payment gateways and order management systems."},
  {"id":10,"q":"What is your development process?","a":"We start with a consultation, then planning, design, development, testing, and finally launch — with client approval at every stage."},
  {"id":11,"q":"How long does a website take to build?","a":"Depending on complexity, anywhere from 2–8 weeks."},
  {"id":12,"q":"How long does an app take to build?","a":"Typically 6–12 weeks depending on features."},
  {"id":13,"q":"Do you provide design services, or do I need to supply my own designs?","a":"We offer full design services, but we can also work with your existing designs."},
  {"id":14,"q":"Will I be able to edit my website after it’s built?","a":"Yes, we build with user-friendly CMS platforms or provide custom admin panels so you can make updates."},
  {"id":15,"q":"How much does a website cost?","a":"Prices vary based on size, features, and complexity. We provide a custom quote after consultation."},
  {"id":16,"q":"Do you require a deposit?","a":"Yes, we typically take a 50% deposit to start work, with the remainder due on completion."},
  {"id":17,"q":"Do you offer payment plans?","a":"Yes, we can arrange staged payments for larger projects."},
  {"id":18,"q":"Do you charge for consultations?","a":"No, initial consultations are free."},
  {"id":19,"q":"Do you offer ongoing maintenance?","a":"Yes, we offer monthly maintenance packages to keep your site/app running smoothly."},
  {"id":20,"q":"What happens if my site or app breaks?","a":"We offer emergency support for our clients to get you back online quickly."},
  {"id":21,"q":"Do you provide hosting?","a":"Yes, we can arrange secure, fast hosting for your site or app."},
  {"id":22,"q":"Do you provide backups?","a":"Yes, all maintenance packages include regular backups."},
  {"id":23,"q":"What platforms do you build on?","a":"We work with WordPress, Shopify, custom PHP/JavaScript frameworks, React, Flutter, and more."},
  {"id":24,"q":"Will my website be mobile-friendly?","a":"Absolutely — every site we build is responsive across devices."},
  {"id":25,"q":"Do you do SEO?","a":"Yes, we include basic SEO setup and offer advanced SEO services if needed."},
  {"id":26,"q":"Can you integrate third-party tools?","a":"Yes, we can connect CRMs, booking systems, payment gateways, and other services."},
  {"id":27,"q":"How does your AI agent handle complex questions?","a":"It uses machine learning and can escalate to a human agent when necessary."},
  {"id":28,"q":"Can your AI agent take payments?","a":"Yes, it can be set up to process orders and payments securely."},
  {"id":29,"q":"Will the AI learn from my customers?","a":"Yes, it improves over time based on interactions."},
  {"id":30,"q":"Is the AI secure?","a":"Yes, we implement encryption and follow GDPR compliance."}
];

const fuse = new Fuse(faqs, {
  keys: ['q'],
  threshold: 0.3,
  includeScore: true,
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed. Use POST.' });
  }

  const { message } = req.body;

  if (!message || typeof message !== 'string') {
    return res.status(400).json({ message: 'Please provide a message string.' });
  }

  const text = message.trim().toLowerCase();

  // Basic greeting handling
  const greetings = ['hi', 'hello', 'hey', 'greetings', 'good morning', 'good afternoon', 'good evening'];
  if (greetings.some(greet => text.includes(greet))) {
    return res.status(200).json({ reply: 'Hello! How can I help you today?' });
  }

  // Search FAQs
  const results = fuse.search(text);

  if (results.length > 0 && results[0].score < 0.3) {
    // Good match found
    return res.status(200).json({ reply: results[0].item.a });
  }

  // No good match found — offer fallback
  return res.status(200).json({
    reply: "I'm sorry, I don't have an answer for that. You can email us at reece@rpwebstudio.co.uk for help."
  });
}
