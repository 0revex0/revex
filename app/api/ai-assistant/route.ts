import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";
import { yassinData } from "@/data/yassin";

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY!
);

export async function POST(request: Request) {
  try {
    const { message, messages } = await request.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "السؤال غير صالح." },
        { status: 400 }
      );
    }

    const model = genAI.getGenerativeModel({
  model: "gemini-3.5-flash-lite",
     systemInstruction: `

أنت المساعد الذكي الرسمي لموقع Yassin | REVEX.

وظيفتك الوحيدة هي الإجابة عن الأسئلة المتعلقة بياسين ومعلومات الموقع العامة.

القواعد:

1. استخدم المعلومات الموجودة في بيانات Yassin فقط.

2. لا تخترع أي معلومة عن ياسين.

3. لا تستنتج معلومات شخصية غير موجودة في البيانات.

4. إذا لم تجد المعلومة المطلوبة في البيانات، أخبر المستخدم بأنه لا توجد معلومات كافية عن هذا الأمر.

5. إذا كان السؤال لا يتعلق بياسين أو بمحتوى الموقع، أخبر المستخدم بأنك مخصص للإجابة عن الأسئلة المتعلقة بياسين ومحتوى هذا الموقع.

6. يجب أن تحدد لغة الرد اعتمادًا على لغة آخر سؤال أرسله المستخدم.

7. إذا كان آخر سؤال باللغة العربية، يجب أن يكون الرد باللغة العربية.

8. إذا كان آخر سؤال باللغة الفرنسية، يجب أن يكون الرد باللغة الفرنسية.

9. إذا كان آخر سؤال باللغة الإنجليزية، يجب أن يكون الرد باللغة الإنجليزية.

10. لا تجعل لغة هذه التعليمات أو لغة بيانات Yassin تحدد لغة الرد.

11. لا تترجم سؤال المستخدم إلى لغة أخرى قبل الإجابة عليه.

12. إذا كانت المحادثة السابقة بلغة مختلفة ثم أرسل المستخدم سؤالًا بلغة جديدة، استخدم لغة السؤال الجديد.

13. إذا كان السؤال يحتوي على أكثر من لغة، استخدم اللغة الغالبة في السؤال.

14. يجب أن تكون رسائل عدم توفر المعلومات والردود خارج نطاق اختصاصك بنفس لغة سؤال المستخدم أيضًا.

15. اجعل الإجابات واضحة ومختصرة عند الأسئلة البسيطة.

16. افهم سياق المحادثة بشكل طبيعي. إذا كان الزائر يتحدث عن ياسين، ثم استخدم ضميرًا مثل "هو" أو "ـه" أو عبارات مثل "عنده" أو "يحب" دون ذكر اسم شخص آخر، فاعتبر أن المقصود هو ياسين، ما لم يوضح الزائر أنه يتحدث عن شخص أو شيء آخر.

17. لا تطلب من الزائر تكرار اسم ياسين في كل سؤال إذا كان المقصود واضحًا من سياق المحادثة.

18. لا تكشف أي معلومات غير مخصصة للعرض العام.

بيانات ياسين الرسمية:

${JSON.stringify(yassinData, null, 2)}

`,
    });

    const conversation = Array.isArray(messages)
  ? messages
      .map((item: { role: string; content: string }) => {
        const role = item.role === "user" ? "المستخدم" : "المساعد";
        return `${role}: ${item.content}`;
      })
      .join("\n")
  : "";

const prompt = `
سجل المحادثة السابقة:

${conversation}

المستخدم الآن يسأل:

${message}

أجب عن السؤال الحالي مع الاستفادة من سياق المحادثة السابقة.
`;

const result = await model.generateContent(prompt);

    const answer = result.response.text();

    return NextResponse.json({
      answer,
    });
  } catch (error) {
    console.error("Gemini AI Assistant Error:", error);

    return NextResponse.json(
      {
        error:
          "تعذر الاتصال بالمساعد الذكي حاليًا. حاول مرة أخرى.",
      },
      { status: 500 }
    );
  }
}