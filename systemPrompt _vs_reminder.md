############# system prompt 与 system-reminder的区别
System Prompt：
 1. 位于API 调用的system参数重
 2. 在对话开始前设定好
 3. 独立于用户消息之外

Reminder:
- 被注入到最后一条用户消息的内容中
- 成为用户消息的一部分
- 在运行时动态添加。

## 作用范围不同
    System Prompt：
    - 全局性的指导原则
    - 定义AI的角色、能力、规则
    - 影响整个对话流程
    - 例如：“你是一个专业的客服，请根据用户的问题提供帮助”

    Reminder:
    - 临时的、上下文相关的提示
    - 动态生成，基于当前状态
    - 只影响当前一轮对话
    - 例如：“Your todo list has 3 pending items ...”
## 内容特点不同
    System Prompt：
    - 工具使用规则
    - 行为准则
    - 输出格式要求
    - 安全限制

    Reminder:
    <system-reminder>
        - Todo列表状态
        - 工具使用提示
        - 当前任务的详细说明
        - 上下文相关的提示
        - 动态生成，基于当前状态
        - 只影响当前一轮对话
        - 例如：“Your todo list has 3 pending items ...”
    </system-reminder>
## 更新频率不同
    System Prompt：
    - 相对静态
    - 在会话初始化时确定
    - 很少改变
    Reminder:
    - 高度动态
    - 每次查询都可能不同
    - 根据当前状态实时生成。

##具体设计
    具体设计的时候一般是两者结合。system prompt 提供稳定的基础规则。 Remminder提供灵活的动态提示。两者结合，即有一致性又有灵活性。

## 实际例子对比：
    System Prompt (静态):
        You are Claude Code. When using tools:
        - Always use Read before Edit
        - Never create files unless necessary

    Reminder (动态):
        <system-reminder>
        Warning: the file package.json was modified by a linter.
        Don't revert it unless the user asks.
        </system-reminder>

  这样设计让 AI 既遵守全局规则（system），又能响应当前上下文（reminder）。
