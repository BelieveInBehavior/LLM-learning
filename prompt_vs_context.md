# Context engineering vs. prompt engineering

## prompt engineering

prompt 工程师主要关于书写以及组织LLM指令，让LLM有更好的输出

## context engineering

context 指模型进行“推理（生成回答，分析问题）”时可调用的所有信息集合-相当于模型“思考时能参考的材料库”，直接影响推理结果的准确性和相关性。Tokens LL M处理文本的最小单元。上下文工程就像“给模型准备”参考资料的方法论。目的是让模型拿到“最有用的资料”。从而做出更准确的判断，生成更好的结果。核心动作是“curating and maintaining”.Curating根据具体任务主动筛选“有用的信息”。并将其整理成模型高校读取的形式。maintaing是在模型推理的整个过程中，持续管理 “上下文信息”—— 比如：当模型推理到一半发现 “参考资料不够” 时，补充新信息；当上下文过长（超过模型 Token 限制）时，删除无效信息；确保上下文始终是 “最新、最精简、最相关” 的


![Sample Image](./images/vs.jpg)

### Section 2: Another Image


