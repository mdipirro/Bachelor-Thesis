var siti = [
    "Gartner IT Glossary",
    "Scrum Theory",
    "Scrum Roles Demystified",
    "Manifesto for Agile Software Development",
    "SPID",
    "A che punto è SPID (Sistema pubblico dell'identità digitale) e a cosa serve",
    "What Makes Node.js Faster Than Java?",
    "Node.js at PayPal",
    "Introduction to MongoDB",
    "Express.js",
    "Git",
    "Bitbucket",
    "SSO Benefits",
    "Introduction to JSON Web Tokens",
    "HMAC vs ECDSA for JWT",
    "IDP-Initiated vs. SP-Initiated Single Sign-On (SSO)",
    "Using middleware"
];

var docs = [
    "REGOLAMENTO RECANTE LE MODALITÀ ATTUATIVE PER LA REALIZZAZIONE DELLO SPID (articolo 4, comma 2, DPCM 24 ottobre 2014)",
    "An Executive Guide to Identity Access Management",
    "Pro Rest Api Development With Node.js",
    "Use IAM Life Cycle Policies to Enforce Account Disabling and Deletion",
    "Managing Identities, Privileges, Access and Trust Primer for 2016",
    "Mastering JavaScript",
    "Magic Quadrant for Identity and Access Management as a Service, Worldwide",
    "Federated Identity Primer",
    "Security Assertion Markup Language (SAML) V2.0 Technical Overview",
    "Choosing Between On-Premises Federation and Federation IDaaS",
    "How to Choose Between On-Premises and IDaaS Delivery Models for Identity and Access Management",
    "Guide to the Software Engineering Body of Knowledge v3.0",
    "JSON Web Token (JWT)",
    "Design Patterns: Elements of Reusable Object-Oriented Software",
    "Learning JavaScript Design Patterns",
    "Guide to Attribute Based Access Control (ABAC) Definition and Considerations",
    "Technology Overview for Adaptive Access Control"
]

var sortFunction = function(a, b) {
    return a >= b;
}

console.log(siti.sort());
console.log(docs.sort());
