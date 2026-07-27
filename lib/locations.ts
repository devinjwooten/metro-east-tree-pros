import type { Faq } from "@/lib/seo";

export type Location = {
  city: string;
  slug: string;
  heroImage: string;
  heroAlt: string;
  metadataDescription: string;
  introduction: string;
  serviceFocus: string;
  whyChooseCopy: string;
  faqs: Faq[];
};

export const locations: Location[] = [
  {
    city: "Belleville",
    slug: "belleville",
    heroImage: "/images/locations/belleville-hero.jpg",
    heroAlt: "Professional tree-service crew preparing equipment at a residential property",
    metadataDescription:
      "Metro East Tree Pros provides professional tree removal, trimming, stump grinding, storm cleanup, and emergency tree service in Belleville, Illinois.",
    introduction:
      "Belleville homeowners and property managers need tree work that feels organized from the first conversation through final cleanup. Metro East Tree Pros helps you understand the right next step for a hazardous tree, overdue trimming, an old stump, or storm-related damage.",
    serviceFocus:
      "Whether the work involves a single tree near a home or a broader property concern, we plan for access, surrounding structures, and a clean finish.",
    whyChooseCopy:
      "For Belleville properties, we focus on clear communication, thoughtful planning, and work that respects the space around the tree.",
    faqs: [
      { question: "Do you provide tree-service estimates in Belleville?", answer: "Yes. Tell us about the tree, access, and any immediate concerns so we can help you understand the next best step for your Belleville property." },
      { question: "Can you help after storm damage in Belleville?", answer: "We help assess fallen trees, damaged limbs, and blocked access. If there is immediate danger or a downed power line, stay clear and call 911 and the utility provider first." },
      { question: "What should I include when requesting Belleville tree service?", answer: "Share the service you need, the property address if available, access concerns, and any details about the tree or damage. That helps start a productive estimate conversation." },
    ],
  },
  {
    city: "O'Fallon",
    slug: "ofallon",
    heroImage: "/images/locations/ofallon-hero.jpg",
    heroAlt: "Tree-service crew preparing organized equipment beside a suburban home",
    metadataDescription:
      "Request professional tree removal, trimming, stump grinding, storm cleanup, or emergency tree service in O'Fallon, Illinois from Metro East Tree Pros.",
    introduction:
      "When a tree begins affecting your O'Fallon property, the decision should not feel complicated. Metro East Tree Pros provides practical guidance for planned removal, careful trimming, stump grinding, and urgent tree concerns.",
    serviceFocus:
      "We begin with the conditions that matter on your property: the tree, access, nearby structures, and the result you need after the work is complete.",
    whyChooseCopy:
      "O'Fallon customers can expect a straightforward estimate conversation, a safety-focused plan, and clear expectations around the work area.",
    faqs: [
      { question: "What tree services do you provide in O'Fallon?", answer: "Metro East Tree Pros provides tree removal, trimming, stump grinding, storm cleanup, and emergency tree service for O'Fallon-area properties." },
      { question: "Can you help with a tree close to my O'Fallon home?", answer: "Trees near homes, garages, fences, and driveways need careful planning. Share the location and surrounding conditions when you request an estimate." },
      { question: "How do I request an O'Fallon tree-service estimate?", answer: "Use the estimate form or call with your project details. Include the service you need, your city, and anything that affects access or safety." },
    ],
  },
  {
    city: "Edwardsville",
    slug: "edwardsville",
    heroImage: "/images/locations/edwardsville-hero.jpg",
    heroAlt: "Tree-service crew carrying out careful work beside a mature tree",
    metadataDescription:
      "Metro East Tree Pros offers professional tree removal, trimming, stump grinding, storm cleanup, and emergency tree service in Edwardsville, Illinois.",
    introduction:
      "Edwardsville properties deserve tree service that balances the immediate concern with the condition of the rest of the yard. Metro East Tree Pros helps homeowners and property decision-makers move forward with clear guidance and professional care.",
    serviceFocus:
      "From branches creating a clearance concern to a tree that needs removal, we make the scope, next step, and cleanup expectations easier to understand.",
    whyChooseCopy:
      "For Edwardsville projects, our approach centers on practical recommendations, controlled work, and respect for the property throughout the process.",
    faqs: [
      { question: "Can Metro East Tree Pros remove hazardous trees in Edwardsville?", answer: "We discuss the tree, surrounding property, and access needed to plan a controlled removal. An estimate conversation helps determine the appropriate next step." },
      { question: "Do you offer tree trimming in Edwardsville?", answer: "Yes. Tree trimming can address clearance, damaged limbs, and ongoing maintenance needs. Tell us what you are seeing so we can discuss the right service." },
      { question: "What happens after an Edwardsville estimate request?", answer: "Your details help us understand the project and follow up about the next step. Include any access, timing, or safety concerns that may affect the work." },
    ],
  },
  {
    city: "Collinsville",
    slug: "collinsville",
    heroImage: "/images/locations/collinsville-hero.jpg",
    heroAlt: "Professional tree crew working near a residential property",
    metadataDescription:
      "Professional tree removal, tree trimming, stump grinding, storm cleanup, and emergency tree service for Collinsville, Illinois properties.",
    introduction:
      "For Collinsville homeowners, tree concerns can range from routine upkeep to a limb or trunk that no longer feels safe. Metro East Tree Pros provides a clear way to discuss the problem, consider the work, and request a free estimate.",
    serviceFocus:
      "We handle the tree-service needs that affect safety, access, appearance, and the usability of your outdoor space.",
    whyChooseCopy:
      "Collinsville customers choose a process built around thoughtful preparation, professional equipment, and cleanup that is explained before work begins.",
    faqs: [
      { question: "Do you serve homes and commercial properties in Collinsville?", answer: "Metro East Tree Pros discusses tree-service needs for residential and commercial properties in the Metro East, including Collinsville." },
      { question: "Can you grind a stump after tree removal in Collinsville?", answer: "Stump grinding is available as a separate service to help reclaim the space left by an old or recently removed tree. Mention the stump when requesting an estimate." },
      { question: "When should I call about storm-damaged branches in Collinsville?", answer: "Call when branches are broken, hanging, blocking access, or creating a safety concern. Keep clear of immediate hazards and utility lines." },
    ],
  },
  {
    city: "Fairview Heights",
    slug: "fairview-heights",
    heroImage: "/images/locations/fairview-heights-hero.jpg",
    heroAlt: "Tree-service professionals preparing a safe work area with organized equipment",
    metadataDescription:
      "Metro East Tree Pros provides tree removal, trimming, stump grinding, storm cleanup, and emergency tree service in Fairview Heights, Illinois.",
    introduction:
      "Fairview Heights property owners can turn to Metro East Tree Pros when a tree needs more attention than a quick DIY fix. We help clarify what is happening, what service fits the situation, and how to request help without guesswork.",
    serviceFocus:
      "Our services support safer access, better clearance, removal of unwanted trees, and a more usable yard after stump work or storm cleanup.",
    whyChooseCopy:
      "For Fairview Heights projects, we make it easier to move from concern to a practical plan with clear communication and a professional cleanup standard.",
    faqs: [
      { question: "Can I request a free tree-service estimate in Fairview Heights?", answer: "Yes. Share your service need, city, and project details through the estimate form or call Metro East Tree Pros to start the conversation." },
      { question: "Can you remove a tree blocking access in Fairview Heights?", answer: "Blocked driveways and access routes are important details to share. We will discuss the condition, location, and safest next step for the property." },
      { question: "Do I need to know the tree species before contacting you?", answer: "No. A clear description of the tree, its location, and the concern is a useful starting point for an estimate request." },
    ],
  },
  {
    city: "Shiloh",
    slug: "shiloh",
    heroImage: "/images/locations/shiloh-hero.jpg",
    heroAlt: "Organized tree-service equipment and crew at a suburban property",
    metadataDescription:
      "Metro East Tree Pros offers professional tree removal, trimming, stump grinding, storm cleanup, and emergency tree service in Shiloh, Illinois.",
    introduction:
      "A tree project in Shiloh often begins with a straightforward question: can this be handled safely and cleanly? Metro East Tree Pros helps answer that question with practical guidance for removal, trimming, stump work, and storm damage.",
    serviceFocus:
      "We focus on the work that helps you protect the property, restore access, and make your outdoor space easier to use.",
    whyChooseCopy:
      "Shiloh homeowners benefit from an estimate process that starts with listening to the property concern before recommending the next step.",
    faqs: [
      { question: "What should I do about a leaning tree in Shiloh?", answer: "A sudden or worsening lean can indicate a concern worth assessing. Keep people clear of the area and share the tree location and nearby structures when you contact us." },
      { question: "Can you trim branches over a driveway in Shiloh?", answer: "Tree trimming can help address clearance concerns. Tell us where the branches are located and what access or structure concerns you have." },
      { question: "Is property address information required for a Shiloh estimate?", answer: "The property address is optional on the form, but it can be helpful for understanding the project location and access." },
    ],
  },
  {
    city: "Swansea",
    slug: "swansea",
    heroImage: "/images/locations/swansea-hero.jpg",
    heroAlt: "Professional tree crew working in a clean residential yard",
    metadataDescription:
      "Get professional tree removal, trimming, stump grinding, storm cleanup, and emergency tree service in Swansea, Illinois from Metro East Tree Pros.",
    introduction:
      "Metro East Tree Pros helps Swansea property owners address tree work with less uncertainty and more clarity. Whether you are planning ahead or responding to damage, we make it simple to explain the situation and request an estimate.",
    serviceFocus:
      "We provide practical options for tree removal, canopy care, stump grinding, and storm-related cleanup based on the needs of your property.",
    whyChooseCopy:
      "For Swansea customers, our value is a well-organized experience: clear communication, safety-focused planning, and attention to the final condition of the work area.",
    faqs: [
      { question: "Do you provide stump grinding in Swansea?", answer: "Yes. Stump grinding helps remove old stumps and reclaim usable space. Include the stump location and any access limitations in your request." },
      { question: "Can you help with tree cleanup after a Swansea storm?", answer: "We help with storm-damaged limbs, trees, and debris. Keep clear of immediate hazards and contact emergency services or the utility provider first when needed." },
      { question: "What services can I request for a Swansea property?", answer: "You can request tree removal, tree trimming, stump grinding, storm cleanup, or emergency tree service through Metro East Tree Pros." },
    ],
  },
  {
    city: "Glen Carbon",
    slug: "glen-carbon",
    heroImage: "/images/locations/glen-carbon-hero.jpg",
    heroAlt: "Tree-service crew and equipment prepared beside a mature tree",
    metadataDescription:
      "Metro East Tree Pros provides professional tree removal, trimming, stump grinding, storm cleanup, and emergency tree service in Glen Carbon, Illinois.",
    introduction:
      "Glen Carbon homeowners and property managers can rely on a clear, professional approach to tree concerns large and small. Metro East Tree Pros helps you move from a question about a tree to a practical estimate conversation.",
    serviceFocus:
      "We look at the tree work in context, including nearby structures, access, debris expectations, and the outcome you want for the property.",
    whyChooseCopy:
      "Glen Carbon customers receive a straightforward process built around informed decisions, controlled work, and respect for the property.",
    faqs: [
      { question: "Can Metro East Tree Pros provide estimates in Glen Carbon?", answer: "Yes. Use the estimate form to share the service you need and the details that will help us understand your Glen Carbon project." },
      { question: "Can you remove an unwanted tree from a Glen Carbon yard?", answer: "Tree removal starts with the tree condition, access, and the surrounding property. Tell us where the tree sits and what concern led you to consider removal." },
      { question: "How can I prepare for a Glen Carbon tree-service visit?", answer: "Note the tree location, nearby structures, access points, and any timing or safety concerns. Those details help create a more useful first conversation." },
    ],
  },
  {
    city: "Granite City",
    slug: "granite-city",
    heroImage: "/images/locations/granite-city-hero.jpg",
    heroAlt: "Professional crew completing tree work at a managed property",
    metadataDescription:
      "Metro East Tree Pros offers tree removal, trimming, stump grinding, storm cleanup, and emergency tree service for Granite City, Illinois properties.",
    introduction:
      "When a Granite City property needs tree work, the next step should feel clear rather than rushed. Metro East Tree Pros provides practical help for hazards, maintenance needs, old stumps, and damage following severe weather.",
    serviceFocus:
      "Our approach starts by understanding what is affecting your property and then discussing the service that best addresses the concern.",
    whyChooseCopy:
      "Granite City customers can expect a customer-first experience that values clear scope, careful work planning, and a clean, manageable result.",
    faqs: [
      { question: "Do you provide emergency tree service in Granite City?", answer: "Metro East Tree Pros helps address urgent tree hazards such as fallen trees, dangerous limbs, and blocked access. Contact 911 and the utility provider first for life safety or downed lines." },
      { question: "Can a Granite City homeowner request trimming and removal?", answer: "Yes. Explain the tree condition and your goal for the property so we can discuss whether trimming, removal, or another service is appropriate." },
      { question: "What cleanup should I discuss for Granite City tree work?", answer: "Ask about the planned debris and work-area cleanup when requesting an estimate so the scope and next steps are clear from the start." },
    ],
  },
  {
    city: "Maryville",
    slug: "maryville",
    heroImage: "/images/locations/maryville-hero.jpg",
    heroAlt: "Tree-service team preparing a tidy residential work area",
    metadataDescription:
      "Metro East Tree Pros provides professional tree removal, trimming, stump grinding, storm cleanup, and emergency tree service in Maryville, Illinois.",
    introduction:
      "Maryville property owners deserve a tree-service partner that makes a complex job easier to understand. Metro East Tree Pros helps you explain the concern, explore the service options, and request a free estimate with confidence.",
    serviceFocus:
      "From safer clearance around a home to a stump that limits the yard, we focus on the details that make the finished property more manageable.",
    whyChooseCopy:
      "For Maryville projects, we pair professional equipment with a calm, communicative process that keeps the customer informed from start to cleanup.",
    faqs: [
      { question: "Can you help with an old stump in Maryville?", answer: "Yes. Stump grinding can help reclaim the area left by an old stump. Share its location, approximate size, and access details when requesting service." },
      { question: "Do you work on Maryville commercial properties?", answer: "Metro East Tree Pros discusses residential and commercial tree-service needs. Include the property type and any access or scheduling considerations in your estimate request." },
      { question: "How do I get started with Maryville tree service?", answer: "Choose the relevant service, provide your city and project details, and use the estimate form or phone number to begin the conversation." },
    ],
  },
  {
    city: "Troy",
    slug: "troy",
    heroImage: "/images/locations/troy-hero.jpg",
    heroAlt: "Professional tree-service crew working beside a landscaped property",
    metadataDescription:
      "Metro East Tree Pros offers tree removal, trimming, stump grinding, storm cleanup, and emergency tree service in Troy, Illinois.",
    introduction:
      "Metro East Tree Pros gives Troy homeowners and property decision-makers a more straightforward way to handle tree concerns. We help you describe the project, understand the available service, and plan the next step with less guesswork.",
    serviceFocus:
      "Our services address the practical issues that make tree work important: safety, access, property care, and the cleanup that follows.",
    whyChooseCopy:
      "Troy customers choose a process that puts communication and responsible planning ahead of vague promises or pressure.",
    faqs: [
      { question: "Can you remove storm-damaged trees in Troy?", answer: "We help assess and address storm-damaged trees and limbs. If the situation involves an immediate threat or power lines, keep away and contact 911 and the utility provider first." },
      { question: "Can I ask about more than one tree on a Troy property?", answer: "Yes. Include the trees or work areas you want to discuss in the Project Details field so the initial estimate conversation has useful context." },
      { question: "Does Metro East Tree Pros offer free estimates for Troy?", answer: "Yes. Request a free estimate by sharing the service, city, and details about what you need help with." },
    ],
  },
  {
    city: "Highland",
    slug: "highland",
    heroImage: "/images/locations/highland-hero.jpg",
    heroAlt: "Tree-service crew completing careful work near mature trees",
    metadataDescription:
      "Metro East Tree Pros provides professional tree removal, trimming, stump grinding, storm cleanup, and emergency tree service in Highland, Illinois.",
    introduction:
      "For Highland property owners, good tree service starts with a clear understanding of the concern and the property around it. Metro East Tree Pros helps make removal, trimming, stump grinding, and storm cleanup easier to plan.",
    serviceFocus:
      "We work with you to identify the service that fits the situation while keeping access, nearby structures, and cleanup expectations in view.",
    whyChooseCopy:
      "Highland customers can expect calm guidance, professional preparation, and an estimate experience designed to make the next step feel simple.",
    faqs: [
      { question: "What tree services are available in Highland?", answer: "Metro East Tree Pros offers tree removal, trimming, stump grinding, storm cleanup, and emergency tree service for Highland-area properties." },
      { question: "Can you help with branches near a Highland roof or driveway?", answer: "Branches affecting structures or access are useful details to share. We can discuss the tree condition and the appropriate trimming or removal approach." },
      { question: "What information helps with a Highland estimate request?", answer: "Provide your contact information, city, service need, property address if you wish, and a clear description of the tree or work area." },
    ],
  },
];

export function getLocation(slug: string) {
  return locations.find((location) => location.slug === slug);
}
