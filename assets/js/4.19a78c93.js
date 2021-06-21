(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{530:function(e,t,a){e.exports=a.p+"assets/img/zhao.27e7d441.png"},531:function(e,t,a){e.exports=a.p+"assets/img/bert-gpt.b956962d.png"},532:function(e,t,a){e.exports=a.p+"assets/img/mass.344ba364.png"},533:function(e,t,a){e.exports=a.p+"assets/img/language-learn.e164c920.png"},534:function(e,t,a){e.exports=a.p+"assets/img/language-learn-2.28392cdb.png"},535:function(e,t,a){e.exports=a.p+"assets/img/uni-representation.18834326.png"},536:function(e,t,a){e.exports=a.p+"assets/img/en-de.8dba028d.png"},537:function(e,t,a){e.exports=a.p+"assets/img/en-fr.9360d699.png"},538:function(e,t,a){e.exports=a.p+"assets/img/exotic.5b6a7a85.png"},539:function(e,t,a){e.exports=a.p+"assets/img/analysis-en-zh-direct.d25167ca.png"},540:function(e,t,a){e.exports=a.p+"assets/img/analysis-en-zh-mrasp.5bf922a3.png"},541:function(e,t,a){e.exports=a.p+"assets/img/analysis-1.a45f2896.png"},542:function(e,t,a){e.exports=a.p+"assets/img/analysis-2.18af40e6.png"},543:function(e,t,a){e.exports=a.p+"assets/img/analysis-3.86a4eb86.png"},572:function(e,t,a){"use strict";a.r(t);var n=a(6),i=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[e._v('​\tIn 1920, the great philosopher Bertrand Russell visited China, accompanied by Yuen Ren Chao, a Chinese-American linguist. Mr. Chao was a naturally gifted polyglot. At that time, he could already speak Baoding dialect, Wu dialect, Fuzhou dialect, Nanjing dialect, and English. He accompanied Russell from Shanghai to Changsha by ship. During the trip, he was learning Changsha dialect from Yang Ruiliu, an economist on the same ship. When the ship docked in Changsha, Yuen Ren Chao was already able to translate Russell\'s speeches and slang into Changsha dialect. Can our neural network  become a model like "Yuen Ren Chao" on machine translation? That is, to create a unified model with multilingual abilities, and when encountering new languages, the model could quickly adapt to translating new ones after training with a small amount of data.')]),e._v(" "),n("p",[e._v("Reading Time: About 15 minutes.")]),e._v(" "),n("p",[e._v("Paper：https://arxiv.org/abs/2010.03142")]),e._v(" "),n("p",[e._v("Github: https://github.com/linzehui/mRASP")]),e._v(" "),n("p",[e._v("Volctrans Experience Official Website: http://translate.volcengine.cn/\n")]),e._v(" "),n("h2",{attrs:{id:"introduction"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),n("p",[n("img",{attrs:{src:a(530),alt:"image1"}})]),e._v(" "),n("p",[e._v("A recent work mRASP, which appeared at the 2020 Conference of Empirical Methods in Natural Language Processing, aims to provide a Yuen Ren Chao polyglot model for machine translation [1]. The key idea is to pre-train a model with multilingual capability, and yield any specific translation model by fine-tuning on the corresponding parallel corpus. The model trained with mRASP technique in 32 languages has achieved a comprehensive and significant improvement in 47 translation test sets.")]),e._v(" "),n("p",[e._v("Unlike previous translation models, mRASP has established a successful paradigm of pre-training and fine-tuning for machine translation. This is similar to BERT's role on NLU tasks. There were already pretrained models for natural language generation (GPT). However, they are limited in extending their capabilities on multilingual machine translation tasks.  The central problem that mRASP wants to solve is, can we develop a unified pre-trained translation model and extend it by fine-tuning on a small amount of parallel corpus on any specific language pair to obtain any-language translation model?")]),e._v(" "),n("p",[e._v("mRASP is designed for machine translation tasks. It has three advantages. First, the translation quality can be consistently improved regardless of the amount of parallel bilingual corpus. In rich-resource directions, such as the standard English-French wmt2014 translation task, which already has 40 million parallel sentence pairs for training, mRASP can still significantly improve the quality, reaching a BLEU score of 44.3. In low-resource directions, mRASP performs surprisingly well. In extreme cases, when we have only 10,000 training data for fine-tuning, a reasonable translation model can be obtained through 10-minute fine-tuning. Second, It breaks the limit on languages, for any direction, the mRASP can be directly used to fine-tune to get a single-directional translation model. Finally, it is resource-efficient. Some other pre-training paradigms are trained on hundreds of GPUs for a couple of weeks. By contrast, mRASP only needs 8 GPUs for a week. In short, mRASP can be understood as a lightweight BERT in the field of machine translation. When you need a machine translation model, you should try it, it may surprise you! The authors also said that this technology has been used on the Volctrans system developed by ByteDance and has been tested in actual business practice. The authors have kindly published the research data, codes and pre-trained models.")]),e._v(" "),n("p",[e._v("Next, we will introduce and analyze mRASP from three aspects: 1) the challenges of machine translation pre-training; 2) the motivation and methods of mRASP; 3) the performance and analysis of mRASP.")]),e._v(" "),n("h2",{attrs:{id:"challenges-in-machine-translation-pre-training"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#challenges-in-machine-translation-pre-training"}},[e._v("#")]),e._v(" Challenges in machine translation pre-training")]),e._v(" "),n("p",[e._v("At present, the vast majority of AI tasks are basically statistical learning based on data, and the performance of the model depends on the quality and quantity of data to a large extent. It has become a new successful paradigm for NLP to use a large amount of cheap data to pre-train the model, then fine-tune with a small amount of annotation data in specific scenarios. For example, pre-trained on large-scale unlabeled text, BERT[2] can achieve good results on 11 NLU tasks after fine-tuning on limited annotation data. However, in multilingual machine translation, the paradigm of pre-training and fine-tuning has not yet achieved general success. The training objectives  of previous NLP pre-training methods such as BERT and GPT[5] have a large gap with machine translation, thus are not easy to use directly. mRASP proposed a new idea: it uses massive bilingual parallel corpus accumulated in multiple languages to jointly train a unified model, and then fine-tune based on it. Therefore the pre-training and fine-tuning objectives are as close as possible, so as to give greater play to the role of the pre-training model.")]),e._v(" "),n("p",[n("img",{attrs:{src:a(531),alt:"image2"}})]),e._v(" "),n("p",[n("img",{attrs:{src:a(532),alt:"image3"}})]),e._v(" "),n("p",[e._v("The above figure compares and analyzes the limitations of the previous NLP pre-training paradigms in machine translation scenarios. BERT and GPT respectively correspond to the pre-training of the Transformer[6] encoder part and the decoder part, while machine translation uses the whole sequence-to-sequence model. Only part of the parameters of the translation model are initialized due the inconsistency in model structure. Therefore it will be difficult to effectively play the role of pre-training. As a result, it requires a lot of special skills to be improved [10].")]),e._v(" "),n("p",[e._v("Researchers soon proposed frameworks such as MASS [7] and BART [8] to extend pre-training to sequence-to-sequence tasks. They use auto-encoder for self-learning and have achieved significant results in many downstream NLG tasks. However, there are still two important problems when applying them in machine translation: 1) They brings no improvement in rich-resource languages (such as English, German, English and French). 2) There is no way to extend to multilingual translation tasks. This limitation is largely due to the fact that autocoding is a relatively simple task so it is difficult to learn a deeper representation. By contrast, machine translation requires a more complex semantic transformation. The training objective discrepancy between pre-training and fine-tuning makes it difficult for the model to make the best use of training data. It has become an important challenge to overcome the two problems for the application of pre-training paradigms in the field of machine translation.")]),e._v(" "),n("h2",{attrs:{id:"motivation-and-techniques-of-mrasp"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#motivation-and-techniques-of-mrasp"}},[e._v("#")]),e._v(" Motivation and Techniques of mRASP")]),e._v(" "),n("p",[e._v("​For language learners, a very interesting phenomenon is that after learning three or four languages, the speed of learning a new language will accelerate. For example, if an English native speaker learns German and French separately, he/she may take one year each. However, if he learns German first and then learns French, he/she may only take one year and three months to learn it. If he/she learns Spanish subsequently, the speed may be faster [3]. The same is true for learning programming languages. Learning C ++ may take one year. Learning Java, Python subsequently may only take one month. A simple explanation is that in the process of multilingual learning, human beings will spontaneously summarize the abstract commonalities among languages and focus on learning the characteristics of new languages. Therefore, in order to improve personal language learning ability, it is often necessary to learn more languages, to have a more accurate grasp of language commonalities, instead of desperately learning one language. By the same token, for machine translation, it has become a very interesting question whether the translation ability can be transferred to different languages so that the information between different languages can be utilized for each other.")]),e._v(" "),n("p",[n("img",{attrs:{src:a(533),alt:"image4"}})]),e._v(" "),n("p",[n("img",{attrs:{src:a(534),alt:"image5"}})]),e._v(" "),n("p",[e._v("The design goal of mRASP is based on such considerations: design a general pre-trained model to learn the commonalities of transformation between languages, and then it will be easier to migrate to the new translation direction. Just like language learners, after learning two languages, the third language becomes easier. The design of mRASP follows two basic principles: first, the training objective of pre-training is the same as machine translation, and it is necessary to learn the transformation ability between languages; second, learn the universal representation of the language as much as possible, if the semantics of cross-lingual sentences or words are close, the representation should also be close.")]),e._v(" "),n("p",[e._v("mRASP follows a common pre-training-fine-tuning framework. In the pre-training stage, unlike the traditional pre-training model in which massive unsupervised monolingual data are used, mRASP takes a different approach: it puts multilingual parallel data into the same model for joint training. The Transformer architecture is adopted, plus a language identifier (Language token) to identify the source language and the target language. In order to ensure that sentences and words in different languages could be embedded in the neighbor space, sentences with the same meaning,  random alignment substitution (RAS) is introduced to create a richer context.")]),e._v(" "),n("p",[e._v('There is a certain probability that "爱"(Chinese) in a Chinese sentence "我 爱 北京 天安门" will be replaced by "aime" (French), and "北京"(Chinese) will also be replaced by "Pékin" (French), so the original sentence becomes "I aime Pékin Tiananmen." A pair of parallel sentence pairs in the training set can be expanded into two pairs (even three pairs, four pairs,......)')]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("我 爱 北京 天安门 ==> I love Beijing Tiananmen Square\n我 aime Pékin 天安门 ==> I love Beijing Tiananmen Square\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br")])]),n("p",[e._v('For the model, by learning from abundant parallel corpus, it will naturally learn the correspondence between synonyms across different languages according to this "artificially created context". In fact, RAS based on parallel dictionaries has bridge the representation gap of synonyms across different languages. In the above example, the word vector expectations calculated by "爱"(\'love\' in Chinese) and "aime"(\'love\' in French) are as close as possible.')]),e._v(" "),n("p",[n("img",{attrs:{src:a(535),alt:"image6"}})]),e._v(" "),n("p",[e._v("In the fine-tuning stage, we initialize the parameters with mRASP, and then we adopt the same training method as the traditional single-directional machine translation. Therefore, using mRASP does not require any additional skills. For a detailed introduction, please refer to the paper[1].")]),e._v(" "),n("h2",{attrs:{id:"effectiveness-of-mrasp"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#effectiveness-of-mrasp"}},[e._v("#")]),e._v(" Effectiveness of mRASP")]),e._v(" "),n("p",[e._v("mRASP uses parallel corpus of 32 languages to-and-from English for pre-training. When we only use parallel corpus of English to French wmt14 for fine-tuning, it achieves 44.3 BLEU without laborious Back Translation of massive monolingual corpus. Moreover, when applied to a new translation direction Dutch (Nl) to Portuguese (Pt), with only 12,000 parallel sentence pairs for fine-tuning, mRASP gets a reasonable (BLEU 10 +) model in ten minutes. By contrast, training any usable MT model from scratch using the equivalent parallel sentence pairs is impossible (BLEU is close to 0).")]),e._v(" "),n("p",[e._v("In summary, mRASP has the following advantages:")]),e._v(" "),n("ol",[n("li",[e._v("Easy to reproduce")])]),e._v(" "),n("p",[e._v("The pre-training of mRASP only requires a total of 110 million parallel sentence pairs (the same pair of parallel sentence is applicable to both directions, resulting in a total of 220 million training samples), and the vocabulary only has 64k bpe subword tokens. Compared with other pre-training methods, in which tens of billions of data and dozens of layers are frequently used, the training process is less difficult. We can complete the pre-training process on 32 languages in less than a week using 8 GPUs. By the way, support for more languages can also be simply expanded.")]),e._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[e._v("Highly Versatile")])]),e._v(" "),n("p",[e._v("Compared with the single-directional machine translation models, mRASP brings a consistent improvement in rich, medium and low-resource scenarios. Even for English to French direction where we have the largest parallel corpus, the translation quality is further improved by 1.1 BLEU. More surprisingly, for Dutch to Portuguese direction that have never been seen in the pre-training data, a significant improvement of 10 + BLEU has also been achieved.")]),e._v(" "),n("p",[e._v("Here are some representative experimental results:")]),e._v(" "),n("h3",{attrs:{id:"_1-en-de-and-en-fr-benchmarks"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-en-de-and-en-fr-benchmarks"}},[e._v("#")]),e._v(" 1. En-De and En-Fr Benchmarks")]),e._v(" "),n("p",[e._v("The following figure compares the effect of mRASP on En-De and En-Fr with several concurrent cross-lingual pre-training models. It can be seen that mRASP has certain advantages: it reaches 30.3 (tokenized BLEU) on En->De wmt 2016 test set, 44.3 (tokenized BLEU) on En->Fr wmt 2014 test set. CTNMT uses BERT pre-training. MASS introduces large-scale monolingual data. mBERT is a multilingual BERT model. mBART is another pre-training method that is proposed concurrently, it uses massive multilingual monolingual data, and is trained on 256 GPUs for 20 days.")]),e._v(" "),n("p",[n("img",{attrs:{src:a(536),alt:"image7"}})]),e._v(" "),n("p",[n("img",{attrs:{src:a(537),alt:"image8"}})]),e._v(" "),n("h3",{attrs:{id:"_2-extend-to-language-not-seen-during-the-pre-training-phase"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-extend-to-language-not-seen-during-the-pre-training-phase"}},[e._v("#")]),e._v(" 2. Extend to language not seen during the pre-training phase")]),e._v(" "),n("p",[e._v('Directions that are not included in parallel pairs during the pre-training stage, are also referred as "Exotic Directions". Whether mRASP is effective on Exotic Directions, determines whether mRASP has good generalization capabilities.')]),e._v(" "),n("p",[e._v("The Exotic Directions are divided into four situations in the paper:")]),e._v(" "),n("ul",[n("li",[e._v("Exotic Pair: Both the source language and the target language have been individually pre-trained, but the model has not yet seen the bilingual pairs of them")]),e._v(" "),n("li",[e._v("Exotic Source: The model has only seen the target language in the pre-training stage, and the source language has not been seen at all")]),e._v(" "),n("li",[e._v("Exotic Target: The model has only seen the source language in the pre-training stage, and the target language has not been seen at all")]),e._v(" "),n("li",[e._v("Exotic Full: The model has not seen the source language or the target language at all in the pre-training stage")])]),e._v(" "),n("p",[e._v("It is difficult to train machine translation under the circumstances. Of course, the most difficult one is the last one, which is equivalent to requiring people who have never learned Latin and Hindi to read a few sentences in Latin and Hindi then translate between them.")]),e._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"center"}},[e._v("Category")]),e._v(" "),n("th",{staticStyle:{"text-align":"center"}},[e._v("Source language seen during pre-training?")]),e._v(" "),n("th",{staticStyle:{"text-align":"center"}},[e._v("Target language seen during pre-training?")]),e._v(" "),n("th",{staticStyle:{"text-align":"center"}},[e._v("Language pair seen during pre-training?")])])]),e._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"center"}},[e._v("Exotic Pair")]),e._v(" "),n("td",{staticStyle:{"text-align":"center"}},[e._v("✔")]),e._v(" "),n("td",{staticStyle:{"text-align":"center"}},[e._v("✔")]),e._v(" "),n("td",{staticStyle:{"text-align":"center"}},[e._v("X")])]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[e._v("Exotic Source")]),e._v(" "),n("td",{staticStyle:{"text-align":"center"}},[e._v("X")]),e._v(" "),n("td",{staticStyle:{"text-align":"center"}},[e._v("✔")]),e._v(" "),n("td",{staticStyle:{"text-align":"center"}},[e._v("X")])]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[e._v("Exotic Target")]),e._v(" "),n("td",{staticStyle:{"text-align":"center"}},[e._v("✔")]),e._v(" "),n("td",{staticStyle:{"text-align":"center"}},[e._v("X")]),e._v(" "),n("td",{staticStyle:{"text-align":"center"}},[e._v("X")])]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[e._v("Exotic Full")]),e._v(" "),n("td",{staticStyle:{"text-align":"center"}},[e._v("X")]),e._v(" "),n("td",{staticStyle:{"text-align":"center"}},[e._v("X")]),e._v(" "),n("td",{staticStyle:{"text-align":"center"}},[e._v("X")])])])]),e._v(" "),n("p",[e._v("It is worth noting that both sides of Fr-Zh have appeared separately, but they have not appeared as parallel pairs. mRASP achieves a 20 + BLEU score after fine-tuning on 20K parallel corpus.")]),e._v(" "),n("p",[e._v("For Exotic Full scenario, such as Dutch to Portuguese (Nl-Pt), only 12,000 parallel corpora are used, and after about 10 minutes of training, you can achieve a 10+ BLEU score.")]),e._v(" "),n("p",[n("img",{attrs:{src:a(538),alt:"image9"}})]),e._v(" "),n("h3",{attrs:{id:"_3-case-study"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-case-study"}},[e._v("#")]),e._v(" 3. Case study")]),e._v(" "),n("p",[e._v("In order to understand the effect of mRASP more intuitively, the authors also make a case study in the paper.")]),e._v(" "),n("h4",{attrs:{id:"french-chinese-fr-zh"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#french-chinese-fr-zh"}},[e._v("#")]),e._v(" French-Chinese(Fr-Zh)")]),e._v(" "),n("ul",[n("li",[e._v("Exotic Pair, 20k Parallel Sentence Pair")]),e._v(" "),n("li",[e._v("Direct (0.7 BLEU) is much weaker than mRASP (25.8 BLEU)")])]),e._v(" "),n("p",[e._v("The Direct system does not work at all, while the mRASP system translates well.")]),e._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"center"}}),e._v(" "),n("th",{staticStyle:{"text-align":"left"}},[e._v("Original Text")]),e._v(" "),n("th",{staticStyle:{"text-align":"left"}},[e._v("Translation in English")])])]),e._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"center"}},[e._v("source")]),e._v(" "),n("td",{staticStyle:{"text-align":"left"}},[e._v("Ordre du jour provisoire de la 7424e séance ( privée ) du Conseil")]),e._v(" "),n("td",{staticStyle:{"text-align":"left"}},[e._v("Provisional agenda for the 7424th (closed) meeting of the Council")])]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[e._v("target")]),e._v(" "),n("td",{staticStyle:{"text-align":"left"}},[e._v("安全 理事会 第 7424 次 ( 闭门 ) 会议 临时 议程")]),e._v(" "),n("td",{staticStyle:{"text-align":"left"}},[e._v("Security Council, 7424th (closed) meeting, provisional, agenda")])]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[e._v("Direct")]),e._v(" "),n("td",{staticStyle:{"text-align":"left"}},[e._v("事实上 ， 国际 货币 基金 组织 的 国际 货币 基金 组织 （ IMF ）")]),e._v(" "),n("td",{staticStyle:{"text-align":"left"}},[e._v("In fact, international, monetary, fund, organization, international, monetary, fund, organization (IMF)")])]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[e._v("mRASP")]),e._v(" "),n("td",{staticStyle:{"text-align":"left"}},[e._v("安理会 第 7424 次 （ 非 公开 ） 会议 临时 议程")]),e._v(" "),n("td",{staticStyle:{"text-align":"left"}},[e._v("Council, 7424th (closed) meeting, provisional, agenda")])])])]),e._v(" "),n("h4",{attrs:{id:"dutch-portuguese-nl-pt"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dutch-portuguese-nl-pt"}},[e._v("#")]),e._v(" Dutch-Portuguese (Nl-Pt)")]),e._v(" "),n("ul",[n("li",[e._v("Exotic Full, 12,000 parallel sentence pairs")]),e._v(" "),n("li",[e._v("Direct 0 BLEU vs mRASP 14.1 BLEU")])]),e._v(" "),n("p",[e._v("We find that the translation system obtained by mRASP can not successfully translate every detail, but it can grasp the key information of the original text. For example, in the following example (1) date (2) minutes of the meeting <-> news of meeting (3) circulated <-> shared.")]),e._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"center"}}),e._v(" "),n("th",{staticStyle:{"text-align":"left"}},[e._v("Original Text")]),e._v(" "),n("th",{staticStyle:{"text-align":"left"}},[e._v("Translation in English")])])]),e._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"center"}},[e._v("source")]),e._v(" "),n("td",{staticStyle:{"text-align":"left"}},[e._v("de notulen van de vergadering van donderdag 21 september zijn rondgedeeld.")]),e._v(" "),n("td",{staticStyle:{"text-align":"left"}},[e._v("The minutes of the meeting on Thursday, 21 September have been circulated.")])]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[e._v("target")]),e._v(" "),n("td",{staticStyle:{"text-align":"left"}},[e._v("a acta da sessão de quinta feira , 21 de setembro de 2000 , já foi distribuída.")]),e._v(" "),n("td",{staticStyle:{"text-align":"left"}},[e._v("The minutes of the meeting on Thursday, 21 September 2000 have now been distributed.")])]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[e._v("Direct")]),e._v(" "),n("td",{staticStyle:{"text-align":"left"}},[e._v("Os governos, os líderes mundiais dos seus próprios.")]),e._v(" "),n("td",{staticStyle:{"text-align":"left"}},[e._v("Governments, their own world leaders.")])]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[e._v("mRASP")]),e._v(" "),n("td",{staticStyle:{"text-align":"left"}},[e._v("As notícias da reunião do dia 21 de Setembro foram partilhadas.")]),e._v(" "),n("td",{staticStyle:{"text-align":"left"}},[e._v("News of the September 21 meeting has been shared.")])])])]),e._v(" "),n("h4",{attrs:{id:"english-french-en-fr"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#english-french-en-fr"}},[e._v("#")]),e._v(" English-French (En-Fr)")]),e._v(" "),n("ul",[n("li",[e._v("We found that one of the advantages of the model trained by the mRASP method over the Direct method is that the Direct system tends to ignore meaningless words (such as articles, deixis, etc.), while the mRASP maintains the consistency of articles and deixis.")])]),e._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"center"}}),e._v(" "),n("th",{staticStyle:{"text-align":"left"}},[e._v("Text")])])]),e._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"center"}},[e._v("source")]),e._v(" "),n("td",{staticStyle:{"text-align":"left"}},[e._v("An investigation is under way to find the cause of the fire .")])]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[e._v("target")]),e._v(" "),n("td",{staticStyle:{"text-align":"left"}},[e._v("Une enquête est en cours pour trouver la cause de cet incendie .")])]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[e._v("Direct")]),e._v(" "),n("td",{staticStyle:{"text-align":"left"}},[e._v("enquête est en cours pour déterminer la cause de l' incendie .")])]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[e._v("mRASP")]),e._v(" "),n("td",{staticStyle:{"text-align":"left"}},[e._v("Une enquête est en cours pour trouver la cause de l' incendie .")])])])]),e._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"center"}}),e._v(" "),n("th",{staticStyle:{"text-align":"left"}},[e._v("Text")])])]),e._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"center"}},[e._v("source")]),e._v(" "),n("td",{staticStyle:{"text-align":"left"}},[e._v("After Broadway and London , Paris is finally finding its voice .")])]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[e._v("target")]),e._v(" "),n("td",{staticStyle:{"text-align":"left"}},[e._v("Après Broadway et Londres , Paris trouve enfin sa voix .")])]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[e._v("Direct")]),e._v(" "),n("td",{staticStyle:{"text-align":"left"}},[e._v("Broadway et Londres , Paris trouve enfin sa voix .")])]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[e._v("mRASP")]),e._v(" "),n("td",{staticStyle:{"text-align":"left"}},[e._v("Après Broadway et Londres , Paris trouve enfin sa voix .")])])])]),e._v(" "),n("h4",{attrs:{id:"english-chinese-en-zh"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#english-chinese-en-zh"}},[e._v("#")]),e._v(" English-Chinese (En-Zh)")]),e._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"center"}}),e._v(" "),n("th",{staticStyle:{"text-align":"left"}},[e._v("Original Text")]),e._v(" "),n("th",{staticStyle:{"text-align":"left"}},[e._v("Translation in English")])])]),e._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"center"}},[e._v("source")]),e._v(" "),n("td",{staticStyle:{"text-align":"left"}},[e._v("and for the middle class.")]),e._v(" "),n("td",{staticStyle:{"text-align":"left"}})]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[e._v("target")]),e._v(" "),n("td",{staticStyle:{"text-align":"left"}},[e._v("对中产阶级而言。")]),e._v(" "),n("td",{staticStyle:{"text-align":"left"}},[e._v("For the middle class.")])]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[e._v("Direct")]),e._v(" "),n("td",{staticStyle:{"text-align":"left"}},[e._v("还有中产阶级。")]),e._v(" "),n("td",{staticStyle:{"text-align":"left"}},[e._v("And the middle class.")])]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[e._v("mRASP")]),e._v(" "),n("td",{staticStyle:{"text-align":"left"}},[e._v("对中产阶级而言。")]),e._v(" "),n("td",{staticStyle:{"text-align":"left"}},[e._v("For the middle class.")])])])]),e._v(" "),n("h3",{attrs:{id:"findings-from-mrasp-trained-model"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#findings-from-mrasp-trained-model"}},[e._v("#")]),e._v(" Findings from mRASP trained model")]),e._v(" "),n("p",[e._v("As a general pre-training model, where does the improvements of mRASP for downstream MT tasks come from?")]),e._v(" "),n("p",[e._v("The author believes that its improvements mainly comes from two aspects:")]),e._v(" "),n("ol",[n("li",[e._v("mRASP narrows the gap between the vector representation of synonyms across different languages")]),e._v(" "),n("li",[e._v("mRASP narrows the gap between the vector representation of synonymous sentences across different languages")])]),e._v(" "),n("p",[e._v('The narrowing of the gap between word-level and sentence-level representations means that after learning parallel sentence pairs in a large number of languages in the pre-training stage, mRASP implicitly "mastered" the language-independent representation, which can be migrated to any language, so mRASP can generally improve the effect of downstream machine translation tasks.')]),e._v(" "),n("h4",{attrs:{id:"_1-mrasp-draws-word-level-vector-representation-of-different-language-closer"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-mrasp-draws-word-level-vector-representation-of-different-language-closer"}},[e._v("#")]),e._v(" 1. mRASP draws word-level vector representation of different language closer")]),e._v(" "),n("p",[e._v("RAS is introduced by making the same context shared between synonyms across different languages. Since the word vector is determined by the context, RAS further draws the representation of synonyms across different languages closer.")]),e._v(" "),n("p",[e._v("Up: w/o RAS, Down: w/ RAS")]),e._v(" "),n("p",[e._v("It can be seen that with the RAS method, the embedding distribution between different languages is drawn closer (the angle becomes smaller).")]),e._v(" "),n("p",[n("img",{attrs:{src:a(539),alt:"image10"}})]),e._v(" "),n("p",[n("img",{attrs:{src:a(540),alt:"image11"}})]),e._v(" "),n("h4",{attrs:{id:"_2-mrasp-draws-sentence-level-vector-representation-of-different-language-closer"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-mrasp-draws-sentence-level-vector-representation-of-different-language-closer"}},[e._v("#")]),e._v(" 2. mRASP draws sentence-level vector representation of different language closer")]),e._v(" "),n("p",[e._v("mRASP narrows the gap between the representation of synonyms, as well as the vector representation of semantics.")]),e._v(" "),n("p",[e._v("We use the encoder output vector as the representation of the sentence (L2 normalized averaged-pooled encoded output). From the TED parallel test set (filtered 15-way parallel test set, a total of 2284), we match the nearest sentence based on similarity score (cosine similarity), then calculate the Top-1 accuracy (sentence retrieval accuracy).")]),e._v(" "),n("p",[e._v("Figure 1: The accuracy of mRASP minus the accuracy of mBART [9]. Note that Dutch (Nl) has never appeared in the mRASP pre-training data, and the accuracy in other directions is much higher than that of mBART.")]),e._v(" "),n("ul",[n("li",[e._v("The average accuracy of mRASP retrieval reached 76%")])]),e._v(" "),n("p",[e._v("Figure 2: Accuracy of mRASP minus the accuracy of mRASP w/o RAS. It can be seen that RAS  has obvious benefits on languages (Nl) that did not appear in the pre-training stage.")]),e._v(" "),n("p",[e._v("Figure 3: After removing the language identifier (Language token) at the beginning of the sentence, the accuracy of Nl can be further improved, at a sacrifice that the accuracy of other languages is greatly reduced.")]),e._v(" "),n("p",[n("img",{attrs:{src:a(541),alt:"image12"}})]),e._v(" "),n("p",[n("img",{attrs:{src:a(542),alt:"image13"}})]),e._v(" "),n("p",[n("img",{attrs:{src:a(543),alt:"image14"}})]),e._v(" "),n("p",[e._v("It can be seen that RAS does further draws closer the semantic vector representation, and synonymous sentences will be closely represented after mRASP.")]),e._v(" "),n("h2",{attrs:{id:"summary"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[e._v("#")]),e._v(" Summary")]),e._v(" "),n("p",[e._v('Back to the beginning of the article, Mr. Chao, a language genius, has mastered 33 dialects plus 7 foreign languages in his life. From Baoding in the north China to Fuzhou in the south, from the upper reaches to the lower reaches of the Yangtze River, from Berkeley in the United States to Paris in France, he can speak local languages with a local accent. And the establishment of a unified multilingual and cross-domain translation model is one of the ultimate goals of machine translation research. mRASP, which is in line with the language genius Yuen Ren Chao, has established a successful path from multilingual pre-training to fine-tuning to multiple machine translation models, which will also become a new paradigm of machine translation. ByteDance has applied this technology to the Volctrans system and you can try it in the web page attached at the end of the text. We are looking forward to the continuous emergence of new methods in this direction, making great strides towards the ultimate machine translation goal. In the next few years, the progress of machine translation can help everyone in dozens of countries become "Yuen Ren Chao" and truly communicate without language barriers.')]),e._v(" "),n("h2",{attrs:{id:"references"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),n("p",[e._v('[1] Lin, Zehui, et al. "Pre-training Multilingual Neural Machine Translation by Leveraging Alignment Information." In the Conference on Empirical Methods in Natural Language Processing  (2020).')]),e._v(" "),n("p",[e._v('[2] Devlin, Jacob, et al. "Bert: Pre-training of deep bidirectional transformers for language understanding." NAACL-HLT (1) 2019: 4171-4186.')]),e._v(" "),n("p",[e._v('[3] Thomas, Reed, and Callie Mady. "Teaching for transfer: Insights from theory and practices in primary-level French-second-language classrooms." McGill Journal of Education/Revue des sciences de l\'éducation de McGill 49.2 (2014): 399-416.')]),e._v(" "),n("p",[e._v('[4] Johnson, Melvin, et al. "Google’s multilingual neural machine translation system: Enabling zero-shot translation." Transactions of the Association for Computational Linguistics 5 (2017): 339-351.')]),e._v(" "),n("p",[e._v('[5] Radford, Alec, et al. "Improving language understanding by generative pre-training." (2018): 12.')]),e._v(" "),n("p",[e._v('[6] Vaswani, Ashish, et al. "Attention is all you need." Advances in neural information processing systems. 2017.')]),e._v(" "),n("p",[e._v('[7] Song, Kaitao, et al. "MASS: Masked Sequence to Sequence Pre-training for Language Generation." ICML. 2019.')]),e._v(" "),n("p",[e._v('[8] Lewis, Mike, et al. "Bart: Denoising sequence-to-sequence pre-training for natural language generation, translation, and comprehension."  ACL 2020: 7871-7880')]),e._v(" "),n("p",[e._v('[9] Liu, Yinhan, et al. "Multilingual denoising pre-training for neural machine translation." TACL.2020')]),e._v(" "),n("p",[e._v('[10] Yang, et al. "Towards Making the Most of BERT in Neural Machine Translation"  AAAI.2020')])])}),[],!1,null,null,null);t.default=i.exports}}]);