## Claude code plan mode
1. 在Claude code中，plan mode是将调查以及分析阶段从执行阶段分离开来。显著的提升了安全性。
当启动plan mode时，在我们没有approve 规划的时候Claude 将不允许编辑文件，运行命令行行，以及做任何修改。
2. 在还没有plan mode的时候，我的指令是说不要编码，只是给出建议。一般请况下这个prompt都会起作用。但是有时候Claude会忽略这个prompt，直接编码。 当我询问suggestions的时候，claude会提供很多有序的选项。不再需要猜测claude code将要编辑文件还是会建议。输出是结构话的，可预测的。在执行之前你可以approve.
