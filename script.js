document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".animate");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(el => observer.observe(el));
});

(function(){
  const faqs = [
    {"q":"Who is RP Web Studio?","a":"RP Web Studio is a small, efficient team that builds websites, apps, and AI customer service solutions for businesses, focusing on high quality and competitive prices."},
    {"q":"What makes you different from big agencies?","a":"We have lower overheads, a leaner team, and a direct client-to-developer relationship, which means faster delivery and lower costs without cutting quality."},
    {"q":"Where are you based?","a":"[Insert location], but we work with clients worldwide."},
    {"q":"Do you work with small businesses or only large companies?","a":"We work with businesses of all sizes, from startups to established enterprises."},
    {"q":"What services do you offer?","a":"Website design, app development, AI-powered customer service agents, custom integrations, and ongoing maintenance."},
    {"q":"What is an AI agent, and how can it help my business?","a":"An AI agent is a chatbot or virtual assistant integrated into your site or app that can handle customer queries, take orders, and assist users 24/7."},
    {"q":"Can you integrate AI into my existing website?","a":"Yes, we can integrate AI tools into existing sites without needing a full rebuild."},
    {"q":"Do you only build websites, or do you build apps too?","a":"We build both — native apps for iOS & Android, and web apps that work across devices."},
    {"q":"Do you offer e-commerce solutions?","a":"Yes, we can build and customise online stores, including payment gateways and order management systems."},
    {"q":"What is your development process?","a":"We start with a consultation, then planning, design, development, testing, and finally launch — with client approval at every stage."},
    {"q":"How long does a website take to build?","a":"Depending on complexity, anywhere from 2–8 weeks."},
    {"q":"How long does an app take to build?","a":"Typically 6–12 weeks depending on features."},
    {"q":"Do you provide design services, or do I need to supply my own designs?","a":"We offer full design services, but we can also work with your existing designs."},
    {"q":"Will I be able to edit my website after it’s built?","a":"Yes, we build with user-friendly CMS platforms or provide custom admin panels so you can make updates."},
    {"q":"How much does a website cost?","a":"Prices vary based on size, features, and complexity. We provide a custom quote after consultation."},
    {"q":"Do you require a deposit?","a":"Yes, we typically take a 50% deposit to start work, with the remainder due on completion."},
    {"q":"Do you offer payment plans?","a":"Yes, we can arrange staged payments for larger projects."},
    {"q":"Do you charge for consultations?","a":"No, initial consultations are free."},
    {"q":"Do you offer ongoing maintenance?","a":"Yes, we offer monthly maintenance packages to keep your site/app running smoothly."},
    {"q":"What happens if my site or app breaks?","a":"We offer emergency support for our clients to get you back online quickly."},
    {"q":"Do you provide hosting?","a":"Yes, we can arrange secure, fast hosting for your site or app."},
    {"q":"Do you provide backups?","a":"Yes, all maintenance packages include regular backups."},
    {"q":"What platforms do you build on?","a":"We work with WordPress, Shopify, custom PHP/JavaScript frameworks, React, Flutter, and more."},
    {"q":"Will my website be mobile-friendly?","a":"Absolutely — every site we build is responsive across devices."},
    {"q":"Do you do SEO?","a":"Yes, we include basic SEO setup and offer advanced SEO services if needed."},
    {"q":"Can you integrate third-party tools?","a":"Yes, we can connect CRMs, booking systems, payment gateways, and other services."},
    {"q":"How does your AI agent handle complex questions?","a":"It uses machine learning and can escalate to a human agent when necessary."},
    {"q":"Can your AI agent take payments?","a":"Yes, it can be set up to process orders and payments securely."},
    {"q":"Will the AI learn from my customers?","a":"Yes, it improves over time based on interactions."},
    {"q":"Is the AI secure?","a":"Yes, we implement encryption and follow GDPR compliance."},
    {
      "q": "I need a webiste for my business",
      "a": "Amazing, we build all types of websites suited to many different needs. To get started, click below to contact our team:<br><a class=\"email-button\" href=\"mailto:reece@rpwebstudio.co.uk\" target=\"_blank\" rel=\"noopener noreferrer\">Email Us</a>"
    },
    {
      "q": "I need a web site",
      "a": "Amazing, we build all types of websites suited to many different needs. To get started, click below to contact our team:<br><a class=\"email-button\" href=\"mailto:reece@rpwebstudio.co.uk\" target=\"_blank\" rel=\"noopener noreferrer\">Email Us</a>"
    },
    {
      "q": "I need a webiste for my business",
      "a": "Amazing, we build all types of websites suited to many different needs. To get started, click below to contact our team:<br><a class=\"email-button\" href=\"mailto:reece@rpwebstudio.co.uk\" target=\"_blank\" rel=\"noopener noreferrer\">Email Us</a>"
    },

    {
      "q": "i want a web",
      "a": "Amazing, we build all types of websites suited to many different needs. To get started, click below to contact our team:<br><a class=\"email-button\" href=\"mailto:reece@rpwebstudio.co.uk\" target=\"_blank\" rel=\"noopener noreferrer\">Email Us</a>"
    },

    {
      "q": "i need price",
      "a": "we can offer a range of quotes suited to all budges. To get started, click below to contact our team:<br><a class=\"email-button\" href=\"mailto:reece@rpwebstudio.co.uk\" target=\"_blank\" rel=\"noopener noreferrer\">Email Us</a>"
    },

    {
      "q": "i need a quote",
      "a": "we can offer a range of quotes suited to all budges. To get started, click below to contact our team:<br><a class=\"email-button\" href=\"mailto:reece@rpwebstudio.co.uk\" target=\"_blank\" rel=\"noopener noreferrer\">Email Us</a>"
    },
    {
      "q": "can i get a quote for my website",
      "a": "we can offer a range of quotes suited to all budges. To get started, click below to contact our team:<br><a class=\"email-button\" href=\"mailto:reece@rpwebstudio.co.uk\" target=\"_blank\" rel=\"noopener noreferrer\">Email Us</a>"
    },

    {
      "q": "quote for web",
      "a": "we can offer a range of quotes suited to all budges. To get started, click below to contact our team:<br><a class=\"email-button\" href=\"mailto:reece@rpwebstudio.co.uk\" target=\"_blank\" rel=\"noopener noreferrer\">Email Us</a>"
    },

    {
      "q": "i need a quote for website",
      "a": "we can offer a range of quotes suited to all budges. To get started, click below to contact our team:<br><a class=\"email-button\" href=\"mailto:reece@rpwebstudio.co.uk\" target=\"_blank\" rel=\"noopener noreferrer\">Email Us</a>"
    },
  ];

  const greetings = ["hi","hello","hey","good morning","good afternoon","good evening"];
  const contactKeywords = [
    "buy", "purchase", "order", "quote", "pricing", "cost", "how much",
    "hire", "contact", "speak to", "talk to", "get in touch", "reach you",
    "sales", "book", "sign up", "start project", "project inquiry", "human"
  ];

  function findAnswer(msg) {
    const text = msg.toLowerCase();
    if (greetings.some(g => text.startsWith(g))) {
      return "Hello! How can I help you today?";
    }
    if (contactKeywords.some(k => text.includes(k))) {
      return `You can get in contact with us here:<br><a class="email-button" href="mailto:reece@rpwebstudio.co.uk">Email Us</a>`;
    }
    let bestMatch = null;
    let bestScore = 0;
    const words = text.split(/\s+/);
    faqs.forEach(faq => {
      let score = 0;
      words.forEach(w => {
        if (faq.q.toLowerCase().includes(w) && w.length > 2) score++;
      });
      if (score > bestScore) {
        bestScore = score;
        bestMatch = faq;
      }
    });
    if (bestScore > 0) return bestMatch.a;
    return `Sorry, I can't help with that right now. Please email us directly.<br><a class="email-button" href="mailto:reece@rpwebstudio.co.uk">Email Us</a>`;
  }

  const btn = document.createElement('button');
  btn.className = 'rp-chat-button';
  btn.innerText = 'Help — RP Web Studio';
  document.body.appendChild(btn);

  const panel = document.createElement('div');
  panel.className = 'rp-chat-panel';
  panel.style.display = 'none';
  panel.innerHTML = `
    <div class="rp-chat-header">
      <div style="width:38px;height:38px;border-radius:6px;background:#00b050;display:flex;align-items:center;justify-content:center;color:#000;font-weight:700">RP</div>
      <h3>RP Web Studio — Support</h3>
    </div>
    <div class="rp-chat-messages" id="rp-messages">
      <div class="rp-msg bot"><div class="bubble">Hi — I’m the RP support agent. Ask me about websites, apps or AI agents.</div></div>
    </div>
    <div class="rp-chat-input">
      <input id="rp-input" class="rp-input" placeholder="Ask about pricing, services, or say 'human' to contact an agent">
      <button id="rp-send" class="rp-send">Send</button>
    </div>
    <div style="padding:8px 12px;font-size:12px;color:#c8f0d1;text-align:center">Open — 24/7 automated. For urgent help: email reece@rpwebstudio.co.uk</div>
  `;
  document.body.appendChild(panel);

  const messagesEl = panel.querySelector('#rp-messages');
  const inputEl = panel.querySelector('#rp-input');

  function pushMessage(text, who='bot') {
    const div = document.createElement('div');
    div.className = 'rp-msg ' + who;
    const b = document.createElement('div');
    b.className = 'bubble';
    b.innerHTML = text;
    div.appendChild(b);
    messagesEl.appendChild(div);
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  function showTypingIndicator(callback) {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'rp-msg bot';
    typingDiv.innerHTML = `<div class="bubble">Typing<span class="dots">...</span></div>`;
    messagesEl.appendChild(typingDiv);
    messagesEl.scrollTop = messagesEl.scrollHeight;

    setTimeout(() => {
      typingDiv.remove();
      callback();
    }, 1000 + Math.random() * 500); // small delay for realism
  }

  btn.onclick = ()=> { 
    panel.style.display = panel.style.display === 'none' ? 'flex' : 'none'; 
    inputEl.focus(); 
  };

  function handleSend(msg) {
    if(!msg) return;
    pushMessage(msg,'user');
    showTypingIndicator(() => {
      const reply = findAnswer(msg);
      pushMessage(reply,'bot');
    });
  }

  panel.querySelector('#rp-send').addEventListener('click', ()=> {
    const v = inputEl.value.trim();
    if (!v) return;
    inputEl.value='';
    handleSend(v);
  });

  inputEl.addEventListener('keydown', (e)=> {
    if (e.key === 'Enter') { panel.querySelector('#rp-send').click(); }
  });
})();
