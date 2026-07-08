// ====== PRODUCT DATA (complete with all details) ======
const products = [{
    id: 1,
    name: 'HOSC Fol',
    price: 29.99,
    image: '1.png',  // صورة من نفس المجلد
    shortDesc: {
        ar: 'تيشيرت براند HOSC Fol، قطن فاخر، تصميم عصري.',
        en: 'HOSC Fol brand T-shirt, premium cotton, modern design.'
    },
    longDesc: {
        ar: `تيشيرت HOSC Fol هو أكثر من مجرد قطعة ملابس؛ إنه بيان أناقة وثقة. مصنوع بعناية من أجود أنواع القطن المصري الناعم الذي يعانق بشرتك بلطف ويمنحك إحساساً لا يُضاهى بالراحة طوال اليوم. تصميمه العصري الأنيق يجمع بين البساطة والجاذبية، مما يجعله الخيار المثالي لكل مناسبة — سواء كنت في العمل، أو في نزهة مع الأصدقاء، أو حتى في لحظات الاسترخاء في المنزل.

        القماش خفيف الوزن، قابل للتهوية، ويمتص الرطوبة بفعالية، مما يبقيك منتعشاً حتى في الأيام الحارة. اللمسة النهائية الفاخرة والخياطة المتقنة تضمن لك طول العمر والمظهر الأنيق دوماً. ارتدِ HOSC Fol واشعر بالفرق — لأنه ليس مجرد تيشيرت، بل رفيق يومي يعكس شخصيتك المميزة وذوقك الرفيع.`,
        en: `The HOSC Fol T-shirt is more than just a piece of clothing; it's a statement of elegance and confidence. Meticulously crafted from the finest Egyptian cotton that gently caresses your skin and gives you an unparalleled feeling of comfort all day long. Its sleek, modern design blends simplicity with allure, making it the perfect choice for any occasion — whether at work, out with friends, or relaxing at home.

        The fabric is lightweight, breathable, and effectively wicks away moisture, keeping you fresh even on hot days. The premium finish and precise stitching ensure durability and lasting style. Wear the HOSC Fol and feel the difference — because it's not just a T-shirt, but a daily companion that reflects your unique character and refined taste.`
    }
}, {
    id: 2,
    name: 'HOSC Gil',
    price: 34.99,
    image: '2.png',
    shortDesc: {
        ar: 'تيشيرت براند HOSC Gil، جودة عالية، لمسة أنيقة.',
        en: 'HOSC Gil brand T-shirt, high quality, elegant touch.'
    },
    longDesc: {
        ar: `تيشيرت HOSC Gil هو تحفة فنية تجمع بين الفخامة والأناقة البسيطة. مصنوع من قطن فائق النعومة يعانق بشرتك بلطف ويمنحك إحساساً بالرفاهية لا يُوصف. كل تفصيلة في هذا التيشيرت تحمل بصمة الجودة العالية — من الخياطة الدقيقة إلى القماش المختار بعناية ليمنحك أقصى درجات الراحة والثقة.

        يتميز بتصميم أنيق يتناسب مع جميع الأوقات، سواء كنت في اجتماع عمل مهم أو في لقاء غير رسمي مع الأصدقاء. القماش ناعم الملمس، خفيف الوزن، ويسمح بتمرير الهواء بشكل مثالي، مما يجعلك تشعر بالانتعاش طوال اليوم. الألوان الزاهية والثابتة تضمن لك مظهراً جذاباً يدوم طويلاً. ارتدِ HOSC Gil واخلق انطباعاً لا يُنسى — لأنه ليس مجرد تيشيرت، بل قطعة فنية تعكس شخصيتك الأنيقة.`,
        en: `The HOSC Gil T-shirt is a work of art that combines luxury with understated elegance. Made from ultra-soft cotton that gently embraces your skin, it gives you an indescribable feeling of refinement. Every detail in this T-shirt bears the mark of high quality — from the precise stitching to the carefully selected fabric that ensures maximum comfort and confidence.

        Its elegant design suits all occasions, whether you're at an important business meeting or a casual gathering with friends. The fabric is soft, lightweight, and perfectly breathable, keeping you feeling fresh all day. The vibrant, colorfast hues ensure a striking look that lasts. Wear the HOSC Gil and make an unforgettable impression — because it's not just a T-shirt, but an artistic piece that reflects your sophisticated personality.`
    }
}, {
    id: 3,
    name: 'HOSC Favo',
    price: 39.99,
    image: '3.png',
    shortDesc: {
        ar: 'تيشيرت براند HOSC Favo، المفضل لدى عشاق الأناقة.',
        en: 'HOSC Favo brand T-shirt, favorite for style lovers.'
    },
    longDesc: {
        ar: `تيشيرت HOSC Favo هو الخيار الأول والأكثر تفضيلاً لعشاق الأناقة والتميز. مصنوع من قطن فاخر ناعم كالحرير، يمنحك شعوراً لا يُوصف بالراحة والرفاهية في كل لحظة. هذا التيشيرت ليس مجرد قطعة ملابس، بل تجربة حسية فريدة — حيث يلامس القطن بشرتك بلطف ويمنحك إحساساً بالدفء والانتعاش في آن واحد.

        تصميمه الأنيق والجذاب يبرز جمال شخصيتك، ويمنحك إطلالة شبابية حيوية تناسب جميع الأعمار والمناسبات. سواء كنت تبحث عن مظهر أنيق للعمل، أو إطلالة عصرية للخروج، فإن HOSC Favo هو الرفيق المثالي. القماش عالي الجودة يضمن لك المتانة والثبات، بينما اللمسة النهائية الفاخرة تضفي على مظهرك رونقاً خاصاً. ارتدِ HOSC Favo واشعر بالتميز — لأنه ليس مجرد تيشيرت، بل أسلوب حياة يعكس ذوقك الرفيع وشخصيتك الفريدة.`,
        en: `The HOSC Favo T-shirt is the top choice and most preferred for lovers of elegance and distinction. Made from luxurious cotton as soft as silk, it gives you an indescribable feeling of comfort and luxury in every moment. This T-shirt is not just a piece of clothing, but a unique sensory experience — where the cotton gently touches your skin and gives you a feeling of warmth and freshness at the same time.

        Its stylish and attractive design highlights your personality, giving you a vibrant, youthful look that suits all ages and occasions. Whether you're looking for a smart look for work or a trendy outfit for going out, HOSC Favo is the perfect companion. The high-quality fabric ensures durability and color retention, while the premium finish adds a special radiance to your appearance. Wear the HOSC Favo and feel exceptional — because it's not just a T-shirt, but a lifestyle that reflects your refined taste and unique personality.`
    }
}];