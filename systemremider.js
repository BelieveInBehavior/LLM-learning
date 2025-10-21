// System Reminder Implementation Examples
// Based on query.ts implementation pattern

// ============================================================================
// Example 1: Simple Text Message - With and Without Reminders
// ============================================================================

console.log("=== Example 1: Simple Text Message ===\n");

// Original user message (without reminders)
const userMessage1_NoReminder = {
  type: 'user',
  uuid: 'msg-001',
  message: {
    role: 'user',
    content: 'Please help me write a function to sort an array'
  }
};

console.log("WITHOUT Reminders:");
console.log(JSON.stringify(userMessage1_NoReminder, null, 2));

// Simulated reminder from system
const reminder1 = "<system-reminder>Remember to follow best practices and include error handling.</system-reminder>\n\n";

// User message WITH reminders injected (like query.ts lines 206-220)
const userMessage1_WithReminder = {
  type: 'user',
  uuid: 'msg-001',
  message: {
    role: 'user',
    content: reminder1 + 'Please help me write a function to sort an array'
  }
};

console.log("\nWITH Reminders:");
console.log(JSON.stringify(userMessage1_WithReminder, null, 2));

// ============================================================================
// Example 2: Complex Content Array - With and Without Reminders
// ============================================================================

console.log("\n\n=== Example 2: Complex Content Array ===\n");

// Original user message with complex content (image + text)
const userMessage2_NoReminder = {
  type: 'user',
  uuid: 'msg-002',
  message: {
    role: 'user',
    content: [
      {
        type: 'image',
        source: {
          type: 'base64',
          media_type: 'image/png',
          data: 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=='
        }
      },
      {
        type: 'text',
        text: 'What do you see in this image?'
      }
    ]
  }
};

console.log("WITHOUT Reminders:");
console.log(JSON.stringify(userMessage2_NoReminder, null, 2));

// Reminder for image analysis
const reminder2 = "<system-reminder>When analyzing images, describe all visible elements in detail.</system-reminder>\n\n";

// User message WITH reminders injected as an additional text block
const userMessage2_WithReminder = {
  type: 'user',
  uuid: 'msg-002',
  message: {
    role: 'user',
    content: [
      {
        type: 'image',
        source: {
          type: 'base64',
          media_type: 'image/png',
          data: 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=='
        }
      },
      {
        type: 'text',
        text: 'What do you see in this image?'
      },
      {
        type: 'text',
        text: reminder2
      }
    ]
  }
};

console.log("\nWITH Reminders:");
console.log(JSON.stringify(userMessage2_WithReminder, null, 2));

// ============================================================================
// Example 3: Code Review Request - With and Without Reminders
// ============================================================================

console.log("\n\n=== Example 3: Code Review Request ===\n");

const codeSnippet = `
function calculateTotal(items) {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total += items[i].price;
  }
  return total;
}
`;

// Original message
const userMessage3_NoReminder = {
  type: 'user',
  uuid: 'msg-003',
  message: {
    role: 'user',
    content: `Review this code:\n${codeSnippet}`
  }
};

console.log("WITHOUT Reminders:");
console.log(JSON.stringify(userMessage3_NoReminder, null, 2));

// Multiple reminders can be combined
const reminder3 = `<system-reminder>Your todo list has the following pending items:
1. Review code for performance issues
2. Check for edge cases
3. Suggest improvements

Please mark tasks as completed when finished.</system-reminder>

<system-reminder>When reviewing code, always check for:
- Null/undefined handling
- Type safety
- Performance optimization opportunities
</system-reminder>

`;

const userMessage3_WithReminder = {
  type: 'user',
  uuid: 'msg-003',
  message: {
    role: 'user',
    content: reminder3 + `Review this code:\n${codeSnippet}`
  }
};

console.log("\nWITH Reminders:");
console.log(JSON.stringify(userMessage3_WithReminder, null, 2));

// ============================================================================
// Example 4: Tool Usage Scenario - With and Without Reminders
// ============================================================================

console.log("\n\n=== Example 4: Tool Usage Scenario ===\n");

// Message requesting file operations
const userMessage4_NoReminder = {
  type: 'user',
  uuid: 'msg-004',
  message: {
    role: 'user',
    content: 'Read the package.json file and update the version number'
  },
  options: {
    isCustomCommand: false
  }
};

console.log("WITHOUT Reminders:");
console.log(JSON.stringify(userMessage4_NoReminder, null, 2));

// Reminder about tool usage best practices
const reminder4 = `<system-reminder>Tool Usage Guidelines:
- Always use Read tool before Edit/Write tools
- Verify file paths exist before operations
- Use Edit for existing files, Write only for new files
- Never use bash echo for user communication

Current working directory: /Users/wangxinyu/Desktop/LLM-learning
</system-reminder>

`;

const userMessage4_WithReminder = {
  type: 'user',
  uuid: 'msg-004',
  message: {
    role: 'user',
    content: reminder4 + 'Read the package.json file and update the version number'
  },
  options: {
    isCustomCommand: false
  }
};

console.log("\nWITH Reminders:");
console.log(JSON.stringify(userMessage4_WithReminder, null, 2));

// ============================================================================
// Example 5: Multi-turn Conversation - With and Without Reminders
// ============================================================================

console.log("\n\n=== Example 5: Multi-turn Conversation ===\n");

// Simulate a conversation history
const messages_NoReminder = [
  {
    type: 'user',
    uuid: 'msg-005a',
    message: {
      role: 'user',
      content: 'I need to build a REST API'
    }
  },
  {
    type: 'assistant',
    uuid: 'msg-005b',
    message: {
      role: 'assistant',
      content: 'I can help you build a REST API. What framework would you like to use?'
    },
    costUSD: 0.001,
    durationMs: 1200
  },
  {
    type: 'user',
    uuid: 'msg-005c',
    message: {
      role: 'user',
      content: 'Let\'s use Express.js'
    }
  }
];

console.log("WITHOUT Reminders (last message):");
console.log(JSON.stringify(messages_NoReminder[2], null, 2));

// Context-aware reminder for the conversation
const reminder5 = `<system-reminder>Conversation Context:
- User wants to build a REST API
- Framework choice: Express.js
- Remember to suggest: error handling, middleware, routing best practices

Previous task status: Planning phase - not yet implemented
</system-reminder>

`;

// Clone the messages and inject reminder into LAST user message
const messages_WithReminder = [
  messages_NoReminder[0],
  messages_NoReminder[1],
  {
    type: 'user',
    uuid: 'msg-005c',
    message: {
      role: 'user',
      content: reminder5 + 'Let\'s use Express.js'
    }
  }
];

console.log("\nWITH Reminders (last message):");
console.log(JSON.stringify(messages_WithReminder[2], null, 2));

// ============================================================================
// Example 6: Empty Message Handling - With and Without Reminders
// ============================================================================

console.log("\n\n=== Example 6: Edge Case - Empty Content ===\n");

const userMessage6_NoReminder = {
  type: 'user',
  uuid: 'msg-006',
  message: {
    role: 'user',
    content: ''
  }
};

console.log("WITHOUT Reminders:");
console.log(JSON.stringify(userMessage6_NoReminder, null, 2));

const reminder6 = "<system-reminder>Empty user input detected. Please ask for clarification.</system-reminder>\n\n";

const userMessage6_WithReminder = {
  type: 'user',
  uuid: 'msg-006',
  message: {
    role: 'user',
    content: reminder6 + ''
  }
};

console.log("\nWITH Reminders:");
console.log(JSON.stringify(userMessage6_WithReminder, null, 2));

// ============================================================================
// Helper Function: Inject Reminders (Like query.ts lines 199-224)
// ============================================================================

console.log("\n\n=== Helper Function Implementation ===\n");

/**
 * Injects reminders into the last user message of a message array
 * This mimics the implementation in query.ts lines 199-224
 *
 * @param {Array} messages - Array of message objects
 * @param {string} reminders - Reminder text to inject
 * @returns {Array} Modified messages array with reminders injected
 */
function injectRemindersIntoMessages(messages, reminders) {
  if (!reminders || messages.length === 0) {
    return messages;
  }

  // Find the last user message (iterate backwards)
  for (let i = messages.length - 1; i >= 0; i--) {
    const msg = messages[i];
    if (msg?.type === 'user') {
      const lastUserMessage = msg;

      // Clone messages array
      const modifiedMessages = [...messages];

      // Inject reminder based on content type
      modifiedMessages[i] = {
        ...lastUserMessage,
        message: {
          ...lastUserMessage.message,
          content:
            typeof lastUserMessage.message.content === 'string'
              ? reminders + lastUserMessage.message.content
              : [
                  ...(Array.isArray(lastUserMessage.message.content)
                    ? lastUserMessage.message.content
                    : []),
                  { type: 'text', text: reminders },
                ],
        },
      };

      return modifiedMessages;
    }
  }

  return messages;
}

// Test the helper function
const testMessages = [
  {
    type: 'user',
    uuid: 'test-001',
    message: { role: 'user', content: 'Hello' }
  }
];

const testReminder = "<system-reminder>Test reminder</system-reminder>\n\n";
const modifiedTestMessages = injectRemindersIntoMessages(testMessages, testReminder);

console.log("Helper Function Test:");
console.log("Original:", JSON.stringify(testMessages[0].message.content, null, 2));
console.log("Modified:", JSON.stringify(modifiedTestMessages[0].message.content, null, 2));

// ============================================================================
// Summary Comparison Table
// ============================================================================

console.log("\n\n=== SUMMARY COMPARISON ===\n");

console.log(`
                                                                         
                    WITH vs WITHOUT Reminders                            
                                                                         $
                                                                         
 WITHOUT Reminders:                                                      
   - Clean, original user message                                       
   - No additional context or instructions                              
   - Model relies only on system prompt                                 
   - Shorter message length                                             
                                                                         
 WITH Reminders:                                                         
   - System reminders prepended/appended to content                     
   - Additional context and instructions                                
   - Can include: todo items, warnings, guidelines                      
   - Injected into LAST user message only                               
   - Handles both string and array content types                        
   - Preserves original message structure                               
                                                                         
 Key Implementation Points (from query.ts):                              
   - Lines 189-190: Get reminders from formatSystemPromptWithContext    
   - Lines 199-224: Inject into last user message                       
   - Line 202: Iterate backwards to find last user message              
   - Lines 210-218: Handle string vs array content                      
                                                                         
                                                                         
`);

console.log("\n=== Execution Complete ===");
