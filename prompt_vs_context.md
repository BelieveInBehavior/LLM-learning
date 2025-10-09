# Context engineering vs. prompt engineering

## prompt engineering

prompt 工程师主要关于书写以及组织LLM指令，让LLM有更好的输出

## context engineering

context 指模型进行“推理（生成回答，分析问题）”时可调用的所有信息集合-相当于模型“思考时能参考的材料库”，直接影响推理结果的准确性和相关性。Tokens LL M处理文本的最小单元。上下文工程就像“给模型准备”参考资料的方法论。目的是让模型拿到“最有用的资料”。从而做出更准确的判断，生成更好的结果。核心动作是“curating and maintaining”.Curating根据具体任务主动筛选“有用的信息”。并将其整理成模型高校读取的形式。maintaing是在模型推理的整个过程中，持续管理 “上下文信息”—— 比如：当模型推理到一半发现 “参考资料不够” 时，补充新信息；当上下文过长（超过模型 Token 限制）时，删除无效信息；确保上下文始终是 “最新、最精简、最相关” 的


![Sample Image](./images/vs.jpg)

### 为什么context工程师再创建Agents的时候如此重要
LLM像人类一样。随着context window中的token增加。模型处理信息的效率降低。上下文必须被视为边际效益递减的有限资源。与人类有限的工作记忆容量一样。LLM也拥有。
要理解这段文本，需围绕 “大语言模型（LLM）的上下文处理能力限制” 这一核心，拆解 “性能衰减特性”“上下文的资源属性”“注意力预算机制” 三者的逻辑关系，最终指向 “上下文筛选的必要性”：
1. 核心前提：所有 LLM 都存在 “上下文性能衰减”，仅程度不同
文本开篇先明确一个共性现象：“While some models exhibit more gentle degradation than others, this characteristic emerges across all models”
关键术语：“gentle degradation” 指 “平缓的性能衰减”—— 即模型在处理 “长上下文” 时，推理准确性、信息召回率、逻辑连贯性会逐渐下降，但不同模型的衰减速度有差异（比如有的模型处理 1 万字上下文时性能才明显下降，有的在 5000 字时就衰减）。
核心结论：无论模型参数大小、架构差异如何，“上下文越长，性能越可能衰减” 是所有 LLM 的共性特征，没有例外。
这一前提否定了 “‘更好的模型’能无限制处理长上下文” 的误区 —— 即使是先进模型，也无法突破 “长上下文导致性能下降” 的规律。
2. 核心推论：上下文是 “有限资源”，存在 “边际收益递减”
基于上述前提，文本得出第一个关键推论：“Context, therefore, must be treated as a finite resource with diminishing marginal returns”
有限资源（finite resource）：LLM 处理上下文的能力不是无限的 —— 一方面受 “最大 Token 限制”（比如某模型最大支持 128k Token，超过则无法处理）；另一方面受 “有效处理能力限制”（即使未超 Token 上限，长上下文也会导致性能衰减），因此上下文本质是 “总量和效用都有限的资源”。
边际收益递减（diminishing marginal returns）：这是经济学概念，此处类比上下文的效用规律 ——
当你给模型补充 “第一批关键信息”（如解决问题的核心条件、核心数据）时，模型性能提升非常明显（“边际收益高”）；但随着补充的信息越来越多（尤其是重复、无关、冗余的信息），每新增一条信息带来的性能提升会逐渐减少，甚至可能因信息过载导致性能下降（“边际收益递减，直至为负”）。
例如：给模型解决 “2024 年诺贝尔化学奖” 问题时，先补充 “2024 诺奖化学奖得主姓名”“研究领域”，模型能快速生成准确回答（边际收益高）；若再补充 “2023 年诺奖得主信息”“化学奖历史起源”，这些信息对当前问题的帮助极小，反而可能让模型混淆重点（边际收益递减）。
3. 机制解释：LLM 的 “注意力预算” 类比人类 “工作记忆”
为了让 “上下文有限性” 更易理解，文本用人类认知机制做类比：“Like humans, who have limited working memory capacity, LLMs have an “attention budget” that they draw on when parsing large volumes of context”
人类工作记忆（working memory）：指人类大脑临时存储和处理信息的能力，容量有限（比如普通人一次只能记住 7±2 个数字）—— 若同时接收过多信息，会因 “记不住、理不清” 导致判断失误。
LLM 的注意力预算（attention budget）：这是对 LLM “注意力机制” 的形象化描述。LLM 处理上下文时，会通过 “注意力机制” 分配计算资源 —— 对 “重要信息” 分配更多注意力（如关键词、核心逻辑），对 “不重要信息” 分配更少注意力。但这种 “注意力资源” 总量是有限的，即 “注意力预算”。
简单说：LLM 像一个 “只有固定预算的决策者”，处理上下文时每 “关注” 一条信息，就要消耗一部分预算；预算耗尽后，对新信息的关注能力会大幅下降。
4. 最终结论：必须 “精心筛选上下文 Token”
文本最后将逻辑闭环，指出实践要求：“Every new token introduced depletes this budget by some amount, increasing the need to carefully curate the tokens available to the LLM”
Token 消耗预算：由于 “注意力预算有限”，每新增一个 Token（无论是有效信息还是冗余信息），都会消耗一部分预算 —— 即使是无关 Token，也会占用模型的 “注意力资源”，导致其对关键 Token 的关注不足。
核心要求：精心筛选（carefully curate）：正因为 “Token 会消耗预算” 且 “上下文边际收益递减”，所以不能随意将大量信息塞进模型的上下文 —— 必须主动筛选、剔除冗余 / 无关 Token，只保留对当前任务 “最关键、最高效” 的 Token，让模型的 “注意力预算” 用在刀刃上。
一句话总结
所有大语言模型处理长上下文时都会出现性能衰减（仅速度不同），因此上下文需被视为 “有限资源”—— 其效用会随信息增加而递减；这类似人类有限的工作记忆，LLM 也有 “注意力预算”，每新增一个 Token 都会消耗预算，最终决定了：必须精心筛选上下文 Token，才能让模型高效利用资源、避免性能下降。

![Sample Image](./images/vs1.jpg)

