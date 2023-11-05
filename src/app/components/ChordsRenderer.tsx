import React from 'react';

interface ChordProRendererProps {
  content: string;
}

const ChordProRenderer: React.FC<ChordProRendererProps> = ({ content }) => {
  // Regular expressions to match [ch][/ch] and [tab] tags
  const chordRegex = /\[ch\]([^\[]*?)\[\/ch\]/g;
  const tabRegex = /\[tab\]([\s\S]*?)\[\/tab\]/g;

  // Function to replace chord and tab tags with styled HTML
  const renderContentWithChordsAndTabs = (text: string) => {
    const contentWithChords = text
      .split('\n')
      .map((line) => {
        return line.replace(chordRegex, (match, chordName) => {
          return `
            <div class="chord-container inline-block mr-2">
              <span class="chord text-white font-bold text-xs bg-stone-800 rounded-md px-2">${chordName}</span>
            </div>`;
        });
      })
      .join('<br>');

    const contentWithTabs = contentWithChords.replace(tabRegex, (match, tabContent) => {
      return `<div class="tab text-lg font-semibold">${tabContent}</div>`;
    });

    return (
      <div
        dangerouslySetInnerHTML={{
          __html: contentWithTabs,
        }}
      />
    );
  };

  return (
    <div className="p-4">
      {renderContentWithChordsAndTabs(content)}
    </div>
  );
};

export default ChordProRenderer;
