/**
 * AI Service - Isolated API / Response Generator Layer
 * This module handles AI response generation. In future phases (05/06),
 * this mock logic can be replaced with real Worker/API fetch requests
 * without touching any UI code.
 */

(function () {
  /**
   * Simulates an AI assistant response for a given user prompt and attachments.
   * @param {string} prompt - User message input
   * @param {Array<{name: string, type: string, fileType: 'image'|'file', dataUrl?: string, size?: number}>} attachments - Attached files/images
   * @returns {Promise<{text: string, timestamp: string}>}
   */
  async function getAIResponse(prompt, attachments = []) {
    // Simulate network latency (1.2 seconds)
    await new Promise(resolve => setTimeout(resolve, 1200));

    // Error test trigger check
    if (prompt && prompt.toLowerCase().includes('error test')) {
      throw new Error("Simulated network/API failure for testing error states.");
    }

    const lowerPrompt = (prompt || '').toLowerCase();
    let attachmentNote = '';

    if (attachments.length > 0) {
      const imgNames = attachments.filter(a => a.fileType === 'image').map(a => a.name);
      const fileNames = attachments.filter(a => a.fileType === 'file').map(a => a.name);

      const parts = [];
      if (imgNames.length) parts.push(`Image(s): **${imgNames.join(', ')}**`);
      if (fileNames.length) parts.push(`Document(s): **${fileNames.join(', ')}**`);

      attachmentNote = `\n\n*Received attachments*: ${parts.join(' | ')}. I have processed these items alongside your query.`;
    }

    // Default rich markdown response with heading, lists, code, and table
    let responseText = '';

    if (lowerPrompt.includes('quantum') || lowerPrompt.includes('physics')) {
      responseText = `### Understanding Quantum Physics Basics

Quantum physics explores the behavior of matter and energy at atomic and subatomic scales. Here is a quick breakdown of key concepts:

1. **Superposition**: Particles can exist in multiple states simultaneously until observed.
2. **Entanglement**: Two particles become connected such that state changes in one instantly affect the other.
3. **Wave-Particle Duality**: Entities like photons and electrons exhibit both wave-like and particle-like properties.

#### Key Principles Comparison
| Concept | Primary Characteristic | Common Application |
| :--- | :--- | :--- |
| **Superposition** | Multi-state presence | Quantum Computing (Qubits) |
| **Entanglement** | Non-local correlations | Quantum Cryptography |
| **Tunneling** | Barrier penetration | Flash Memory & Semiconductors |

#### Quick Python Simulation Example
\`\`\`python
# Simulating a basic Qubit superposition state probability
import math

def calculate_probabilities(alpha, beta):
    # Normalized amplitudes |alpha|^2 + |beta|^2 = 1
    prob_0 = abs(alpha) ** 2
    prob_1 = abs(beta) ** 2
    return {"|0>": f"{prob_0 * 100:.1f}%", "|1>": f"{prob_1 * 100:.1f}%"}

# Superposition with equal probability (1/sqrt(2))
amp = 1 / math.sqrt(2)
print("Superposition Probabilities:", calculate_probabilities(amp, amp))
\`\`\`

Let me know if you would like me to expand on any of these topics or work through practice problems!${attachmentNote}`;
    } else if (lowerPrompt.includes('essay') || lowerPrompt.includes('write') || lowerPrompt.includes('outline')) {
      responseText = `### Standard 5-Paragraph Essay Structure

Here is a structured outline you can use for academic essays, research papers, or argumentative responses:

- **1. Introduction**
  - Hook / Attention Grabber
  - Context & Background Information
  - **Thesis Statement** (Main argument)
- **2. Body Paragraph 1 (Strongest Argument)**
  - Topic sentence
  - Evidence / Direct Citation
  - Analysis & Explanation
- **3. Body Paragraph 2 (Supporting Evidence)**
  - Topic sentence
  - Evidence & Examples
  - Connection back to thesis
- **4. Body Paragraph 3 (Counterargument & Refutation)**
  - Acknowledge opposing view
  - Refute with evidence
- **5. Conclusion**
  - Restate thesis in fresh words
  - Summary of key body points
  - Final thought / Call to action

#### Essay Checklist
| Section | Key Focus | Target Word Count % |
| :--- | :--- | :--- |
| **Intro** | Thesis & Hook | 10% - 15% |
| **Body** | Arguments & Proof | 70% - 80% |
| **Conclusion**| Wrap-up & Impact | 10% - 15% |

\`\`\`text
Example Thesis Template:
"Although [Counterargument], [Topic] is essential because [Reason 1] and [Reason 2]."
\`\`\`${attachmentNote}`;
    } else if (lowerPrompt.includes('calculus') || lowerPrompt.includes('math') || lowerPrompt.includes('solve')) {
      responseText = `### Step-by-Step Problem Solving Guide

To solve derivatives and integrals effectively, follow these systematic steps:

1. **Identify the function form**: Polynomial, exponential, logarithmic, or trigonometric.
2. **Apply corresponding rules**:
   - **Power Rule**: $\\frac{d}{dx}[x^n] = n x^{n-1}$
   - **Product Rule**: $(fg)' = f'g + fg'$
   - **Chain Rule**: $\\frac{d}{dx}[f(g(x))] = f'(g(x)) \\cdot g'(x)$

#### Derivative Rules Reference
| Rule Name | Mathematical Expression | Example |
| :--- | :--- | :--- |
| **Power Rule** | $\\frac{d}{dx} x^n = n x^{n-1}$ | $\\frac{d}{dx} x^3 = 3x^2$ |
| **Exponential** | $\\frac{d}{dx} e^x = e^x$ | $\\frac{d}{dx} e^{2x} = 2e^{2x}$ |
| **Logarithm** | $\\frac{d}{dx} \\ln(x) = \\frac{1}{x}$ | $\\frac{d}{dx} \\ln(5x) = \\frac{1}{x}$ |

\`\`\`javascript
// Quick derivative evaluation helper for polynomials
function powerRuleDerivative(coefficient, power) {
  if (power === 0) return { coefficient: 0, power: 0 };
  return {
    coefficient: coefficient * power,
    power: power - 1,
    toString() {
      return \`\${this.coefficient}x^\${this.power}\`;
    }
  };
}

console.log(powerRuleDerivative(4, 3).toString()); // Output: 12x^2
\`\`\`${attachmentNote}`;
    } else {
      const userClean = prompt.trim() || 'your prompt';
      responseText = `### Response to: "${userClean.length > 40 ? userClean.substring(0, 40) + '...' : userClean}"

Here is a comprehensive overview to help you master this concept:

- **Key Takeaway**: Breaking complex topics down into core components makes them much easier to study and remember.
- **Active Recall Method**: Test yourself regularly rather than passively re-reading notes.
- **Spaced Repetition**: Review material at increasing intervals for maximum long-term retention.

#### Summary Comparison
| Aspect | Method A (Passive) | Method B (Active Study) |
| :--- | :--- | :--- |
| **Effort Level** | Low | Moderate to High |
| **Retention Rate** | ~10% - 20% | ~75% - 90% |
| **Recommended Tool**| Highlighting | Flashcards & Problem Solving |

#### Example Study Routine Code
\`\`\`javascript
const studySession = {
  subject: "Core Concepts",
  technique: "Pomodoro + Active Recall",
  durationMinutes: 25,
  breakMinutes: 5,
  isEffective: true
};

console.log(\`Starting session for \${studySession.subject}\`);
\`\`\`

Feel free to ask follow-up questions, request explanations for specific terms, or attach additional study notes!${attachmentNote}`;
    }

    return {
      text: responseText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
  }

  // Export to global scope
  window.AIService = {
    getAIResponse
  };
})();
