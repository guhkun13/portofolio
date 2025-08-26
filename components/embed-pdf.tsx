// components/SimplePdfEmbed.tsx
'use client'; // Not strictly necessary for <embed>, but good if it's in a Client Component.

export default function SimplePdfEmbed() {
  return (
    <div className="w-full h-screen">
      <embed
        src="/2025-08-resume-teguh-atma.pdf" // Direct path to file in public folder
        type="application/pdf"
        width="100%"
        height="100%"
        className="min-h-screen border" // Optional styling
      />
    </div>
  );
}