// Job data generator - deterministically generates 100,000 jobs for Brazil
const TOTAL_JOBS = 100000;

const jobTitles = [
  "Software Engineer", "Frontend Developer", "Backend Developer", "Full Stack Developer",
  "Data Analyst", "Data Scientist", "Machine Learning Engineer", "DevOps Engineer",
  "Cloud Architect", "Mobile Developer", "Android Developer", "iOS Developer",
  "Product Manager", "Project Manager", "Scrum Master", "Business Analyst",
  "UI/UX Designer", "Graphic Designer", "Brand Designer", "Web Designer",
  "Marketing Manager", "Digital Marketing Specialist", "SEO Specialist", "Content Writer",
  "Copywriter", "Social Media Manager", "Community Manager", "Growth Hacker",
  "Sales Manager", "Account Manager", "Business Development Manager", "Sales Executive",
  "Financial Analyst", "Accountant", "Finance Manager", "Auditor",
  "HR Manager", "HR Generalist", "Recruiter", "Talent Acquisition Specialist",
  "Operations Manager", "Supply Chain Manager", "Logistics Coordinator", "Procurement Officer",
  "Customer Success Manager", "Customer Support Specialist", "Technical Support Engineer",
  "Network Engineer", "Cybersecurity Analyst", "Information Security Officer",
  "Database Administrator", "Systems Administrator", "IT Manager", "CTO",
  "Legal Counsel", "Compliance Officer", "Risk Manager", "Contract Manager",
  "Healthcare Administrator", "Clinical Research Associate", "Pharmacist", "Nurse",
  "Teacher", "Education Consultant", "Instructional Designer", "Training Manager",
  "Civil Engineer", "Mechanical Engineer", "Electrical Engineer", "Structural Engineer",
  "Architect", "Urban Planner", "Environmental Consultant", "Safety Officer",
  "Real Estate Agent", "Property Manager", "Facilities Manager", "Construction Manager",
  "Research Analyst", "Policy Analyst", "Communications Manager", "Public Relations Officer",
  "Executive Assistant", "Administrative Officer", "Office Manager", "Receptionist",
  "Video Editor", "Motion Graphics Designer", "Content Strategist", "Brand Manager",
  "Partnerships Manager", "Customer Experience Manager", "Data Engineer", "BI Developer",
  "Scrum Master", "Agile Coach", "Release Manager", "Site Reliability Engineer",
  "Penetration Tester", "Cloud Engineer", "Platform Engineer", "API Developer",
  "Hotel Manager", "Restaurant Manager", "Chef", "Sommelier", "Event Manager",
  "Aviation Engineer", "Pilot", "Flight Attendant", "Airport Manager",
  "Agricultural Engineer", "Veterinarian", "Environmental Scientist", "Marine Biologist"
];

// 75+ Brazil based companies + global companies with Brazil presence
const companies = [
  // Brazil based
  "Petrobras", "Vale", "Itaú Unibanco", "Bradesco", "Santander Brasil",
  "Banco do Brasil", "Caixa Econômica Federal", "AmBev", "JBS", "BRF",
  "Natura", "Magazine Luiza", "Via Varejo", "Americanas", "Casas Bahia",
  "Pão de Açúcar", "Carrefour Brasil", "Assaí", "Atacadão", "Dia",
  "Gol Linhas Aéreas", "LATAM Brasil", "Azul Linhas Aéreas", "Embraer",
  "WEG", "Marcopolo", "Randon", "Fras-le", "Tupy",
  "Gerdau", "CSN", "Usiminas", "ArcelorMittal Brasil", "Votorantim",
  "Fibria", "Klabin", "Suzano", "Eucatex", "Duratex",
  "BR Distribuidora", "Ultrapar", "Cosan", "Raízen", "Biosev",
  "Hapvida", "NotreDame Intermédica", "Amil", "SulAmérica", "Bradesco Saúde",
  "Rede D'Or", "Hospital Albert Einstein", "Hospital Sírio-Libanês",
  "Unimed", "Santa Casa", "DASA", "Fleury", "Sabin",
  "Cielo", "Stone", "PagSeguro", "Ebanx", "Nubank",
  "XP Investimentos", "BTG Pactual", "Modal", "Banco Inter", "Banco Original",
  "Oi", "Claro Brasil", "Vivo", "TIM Brasil", "Algar Telecom",
  "Havaianas", "Osklen", "Farm", "Animale", "Colcci",
  
  // Global with Brazil presence
  "Google Brasil", "Amazon Brasil", "Microsoft Brasil", "Apple Brasil", "Meta Brasil",
  "IBM Brasil", "Oracle Brasil", "Cisco Brasil", "Dell Brasil", "HP Brasil",
  "SAP Brasil", "Salesforce Brasil", "Accenture Brasil", "Deloitte Brasil",
  "PwC Brasil", "KPMG Brasil", "EY Brasil", "McKinsey Brasil",
  "HSBC Brasil", "Citi Brasil", "JPMorgan Brasil", "Goldman Sachs Brasil",
  "Unilever Brasil", "P&G Brasil", "Nestle Brasil", "Coca-Cola Brasil",
  "Shell Brasil", "BP Brasil", "ExxonMobil Brasil", "Chevron Brasil",
  "Siemens Brasil", "GE Brasil", "Schneider Electric Brasil", "ABB Brasil",
  "Boeing Brasil", "Airbus Brasil", "Lockheed Martin Brasil",
  "Pfizer Brasil", "Novartis Brasil", "Roche Brasil", "GSK Brasil",
  "Samsung Brasil", "LG Brasil", "Sony Brasil", "Panasonic Brasil",
  "Toyota Brasil", "Honda Brasil", "Nissan Brasil", "BMW Brasil", "Mercedes Brasil",
  "LVMH Brasil", "Chanel Brasil", "Gucci Brasil", "Rolex Brasil"
];

const brazilLocations = [
  // Southeast
  "São Paulo, SP", "Campinas, SP", "Santos, SP", "Santo André, SP",
  "São Bernardo do Campo, SP", "São Caetano do Sul, SP", "Osasco, SP",
  "Guarulhos, SP", "Suzano, SP", "Mogi das Cruzes, SP", "São José dos Campos, SP",
  "Sorocaba, SP", "Ribeirão Preto, SP", "Piracicaba, SP", "Bauru, SP",
  "Rio de Janeiro, RJ", "Niterói, RJ", "Duque de Caxias, RJ", "Nova Iguaçu, RJ",
  "São Gonçalo, RJ", "Petrópolis, RJ", "Volta Redonda, RJ", "Macaé, RJ",
  "Belo Horizonte, MG", "Contagem, MG", "Betim, MG", "Uberlândia, MG",
  "Uberaba, MG", "Juiz de Fora, MG", "Ouro Preto, MG", "Ipatinga, MG",
  "Vitória, ES", "Vila Velha, ES", "Cariacica, ES", "Serra, ES",
  
  // South
  "Curitiba, PR", "Londrina, PR", "Maringá, PR", "Ponta Grossa, PR",
  "Cascavel, PR", "Foz do Iguaçu, PR", "Florianópolis, SC", "Joinville, SC",
  "Blumenau, SC", "Balneário Camboriú, SC", "Porto Alegre, RS", "Canoas, RS",
  "Gravataí, RS", "Caxias do Sul, RS", "Novo Hamburgo, RS", "Pelotas, RS",
  
  // Northeast
  "Salvador, BA", "Camaçari, BA", "Feira de Santana, BA", "Vitória da Conquista, BA",
  "Recife, PE", "Olinda, PE", "Caruaru, PE", "Fortaleza, CE", "Caucaia, CE",
  "Juazeiro do Norte, CE", "São Luís, MA", "Imperatriz, MA", "Teresina, PI",
  "João Pessoa, PB", "Campina Grande, PB", "Natal, RN", "Aracaju, SE",
  "Maceió, AL", "Arapiraca, AL",
  
  // Center-West
  "Brasília, DF", "Goiânia, GO", "Aparecida de Goiânia, GO", "Anápolis, GO",
  "Campo Grande, MS", "Dourados, MS", "Cuiabá, MT", "Várzea Grande, MT",
  "Sinop, MT", "Cáceres, MT",
  
  // North
  "Manaus, AM", "Belém, PA", "Ananindeua, PA", "Santarém, PA",
  "Porto Velho, RO", "Rio Branco, AC", "Macapá, AP", "Palmas, TO",
  "Boa Vista, RR", "Parintins, AM",
  
  // Remote
  "Remote — Brazil", "Remote — São Paulo, Brazil"
];

const salaryRanges = [
  { display: "R$ 2,500 – 4,000/month", min: 2500, max: 4000 },
  { display: "R$ 4,000 – 6,000/month", min: 4000, max: 6000 },
  { display: "R$ 6,000 – 8,500/month", min: 6000, max: 8500 },
  { display: "R$ 8,500 – 12,000/month", min: 8500, max: 12000 },
  { display: "R$ 12,000 – 16,000/month", min: 12000, max: 16000 },
  { display: "R$ 16,000 – 22,000/month", min: 16000, max: 22000 },
  { display: "R$ 22,000 – 30,000/month", min: 22000, max: 30000 },
  { display: "R$ 30,000 – 40,000/month", min: 30000, max: 40000 },
  { display: "R$ 40,000+/month", min: 40000, max: 55000 },
  { display: "R$ 1,500 – 2,500/month", min: 1500, max: 2500 }
];

const jobTypes = ["FULL_TIME", "CONTRACTOR", "PART_TIME", "INTERN", "TEMPORARY"];
const jobTypeDisplay = { 
  "FULL_TIME": "Full-time", 
  "CONTRACTOR": "Contract", 
  "PART_TIME": "Part-time", 
  "INTERN": "Internship", 
  "TEMPORARY": "Temporary" 
};

const experienceLevels = [
  { display: "Entry Level", schema: "no requirements" },
  { display: "Mid Level",   schema: "2 years experience" },
  { display: "Senior Level",schema: "5 years experience" },
  { display: "Lead",        schema: "7 years experience" },
  { display: "Manager",     schema: "5 years experience" },
  { display: "Director",    schema: "8 years experience" },
  { display: "Executive",   schema: "10 years experience" }
];

const industries = [
  "Technology", "Fintech", "E-commerce", "Banking & Finance", "Oil & Gas",
  "Real Estate", "Healthcare", "Education", "Consulting", "Aviation",
  "Construction", "Logistics & Shipping", "Hospitality", "Retail", "Media & Entertainment",
  "Renewable Energy", "Automotive", "Telecommunications", "Legal", "Government",
  "Agriculture", "Forestry", "Mining", "Food Processing"
];

const jobDescriptions = [
  (title, company, isRemote, location) => `We are seeking a talented ${title} to join the team at ${company} in Brazil. ${isRemote ? "This is a fully remote role open to qualified candidates across Brazil." : `This role is based in ${location}.`}

You will be responsible for delivering high-quality work that drives business outcomes and contributes to ${company}'s growing operations in Brazil and South American markets.

Key Responsibilities:
• Lead and execute core ${title.toLowerCase()} functions across the organization
• Collaborate with cross-functional teams to deliver on strategic objectives
• Analyze data and provide actionable insights to improve performance
• Mentor junior team members and contribute to knowledge sharing
• Ensure best practices are followed in all deliverables

Requirements:
• 3–5 years of experience in a similar ${title.toLowerCase()} role
• Strong communication and problem-solving skills
• Experience working in fast-paced global business environment
• Bachelor's degree in a relevant field
• Proficiency with modern tools and platforms

What We Offer:
• Competitive salary in BRL (R$)
• Comprehensive health benefits
• 30 days annual leave
• Remote work allowance
• Annual performance bonus
• Professional development budget
• VA/VR (Meal/Food allowance)
• Transportation allowance`,

  (title, company, isRemote, location) => `${company} is hiring a ${title}! We are a leading company in Brazil looking for experienced professionals to scale our impact across the country.

${isRemote ? "This remote-first position allows you to work from anywhere in Brazil with flexible hours." : `You will work from our ${location} office with a dynamic, ambitious team.`}

About the Role:
As a ${title} at ${company}, you will play a key role in shaping our products and services. You'll work closely with leadership and peers to execute on our mission.

What You'll Do:
• Drive key ${title.toLowerCase()} initiatives from planning to execution
• Build and maintain relationships with key stakeholders
• Report on KPIs and contribute to strategic planning
• Stay updated on industry trends globally and in Brazil
• Represent ${company} with professionalism and integrity

What You Bring:
• 2–6 years proven experience as a ${title.toLowerCase()}
• Strong analytical and communication skills
• Team player with a growth mindset
• Relevant certification or degree preferred

Compensation & Benefits:
• Competitive BRL salary • Health benefits • Annual leave (30 days) • VA/VR • Annual bonus • Transportation allowance`,

  (title, company, isRemote, location) => `Join ${company} as a ${title} and be part of one of Brazil's most exciting companies!

${isRemote ? "🌐 Remote | Work from anywhere in Brazil" : `📍 ${location}`}

We're building the future of business in Brazil and need exceptional talent like you. This is a rare opportunity to work with a world-class brand.

The Opportunity:
You'll be taking on the ${title} role at a critical growth stage. Your work will directly impact millions of customers across Brazil and beyond.

Day-to-Day Responsibilities:
• Execute and improve key workflows within the ${title.toLowerCase()} function
• Collaborate with product, engineering, and business teams
• Track metrics and optimize for performance
• Contribute to a culture of excellence and innovation
• Support senior leadership with reporting and strategy

Your Profile:
• 3+ years in ${title.toLowerCase()} or related field
• Comfortable in a fast-moving business ecosystem
• Strong interpersonal skills and professional work ethic
• Degree in relevant discipline (Master's is a plus)

Perks at ${company}:
Competitive salary | Health & dental benefits | VA/VR | Annual bonus | 30 days leave | Learning budget | Flexible hours`
];

function seededRandom(seed) {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

function getJobData(id) {
  const seed = id * 7919;
  const r = (offset = 0) => seededRandom(seed + offset);

  const isRemote = id <= TOTAL_JOBS / 2;

  const companyIndex = Math.floor((id - 1) / Math.ceil(TOTAL_JOBS / companies.length)) % companies.length;

  const titleIndex   = Math.floor(r(1) * jobTitles.length);
  const locationIndex= Math.floor(r(3) * brazilLocations.length);
  const salaryIndex  = Math.floor(r(4) * salaryRanges.length);
  const jobTypeIndex = Math.floor(r(5) * jobTypes.length);
  const expIndex     = Math.floor(r(6) * experienceLevels.length);
  const industryIndex= Math.floor(r(7) * industries.length);
  const descIndex    = Math.floor(r(8) * jobDescriptions.length);

  const title    = jobTitles[titleIndex];
  const company  = companies[companyIndex];
  const location = isRemote ? "Remote — Brazil" : brazilLocations[locationIndex];
  const salary   = salaryRanges[salaryIndex];
  const jobType  = jobTypes[jobTypeIndex];
  const exp      = experienceLevels[expIndex];
  const industry = industries[industryIndex];
  const description = jobDescriptions[descIndex](title, company, isRemote, brazilLocations[locationIndex]);

  const daysAgo = Math.floor(r(9) * 60);
  const postedDate = new Date();
  postedDate.setDate(postedDate.getDate() - daysAgo);
  const validThrough = new Date(postedDate);
  validThrough.setDate(validThrough.getDate() + 90);

  return {
    id,
    title,
    company,
    location,
    salary: salary.display,
    salaryMin: salary.min,
    salaryMax: salary.max,
    jobType,
    jobTypeDisplay: jobTypeDisplay[jobType],
    experience: exp.display,
    experienceSchema: exp.schema,
    industry,
    isRemote,
    description,
    postedDate: postedDate.toISOString().split('T')[0],
    validThrough: validThrough.toISOString().split('T')[0],
    slug: `${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${company.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${id}`
  };
}

function getJobSchema(job) {
  const schema = {
    "@context": "https://schema.org/",
    "@type": "JobPosting",
    "title": job.title,
    "description": job.description,
    "identifier": {
      "@type": "PropertyValue",
      "name": job.company,
      "value": `JOB-BR-${String(job.id).padStart(6, '0')}`
    },
    "datePosted": job.postedDate,
    "validThrough": `${job.validThrough}T00:00:00Z`,
    "employmentType": job.jobType,
    "hiringOrganization": {
      "@type": "Organization",
      "name": job.company,
      "sameAs": `https://www.google.com/search?q=${encodeURIComponent(job.company)}`
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": job.isRemote ? "Brazil" : job.location.split(',')[0],
        "addressCountry": "BR"
      }
    },
    "applicantLocationRequirements": {
      "@type": "Country",
      "name": "Brazil"
    },
    "baseSalary": {
      "@type": "MonetaryAmount",
      "currency": "BRL",
      "value": {
        "@type": "QuantitativeValue",
        "minValue": job.salaryMin,
        "maxValue": job.salaryMax,
        "unitText": "MONTH"
      }
    },
    "experienceRequirements": {
      "@type": "OccupationalExperienceRequirements",
      "monthsOfExperience": job.experienceSchema === "no requirements" ? 0
        : parseInt(job.experienceSchema) * 12
    },
    "industry": job.industry,
    "url": `/jobs/${job.id}`,
    "directApply": true
  };

  if (job.isRemote) {
    schema.jobLocationType = "TELECOMMUTE";
  }

  return schema;
}

module.exports = { getJobData, getJobSchema, TOTAL_JOBS, jobTitles, companies, brazilLocations, industries };
