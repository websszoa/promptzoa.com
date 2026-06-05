export interface PromptImage {
  src: string;
  ai: string;
}

export interface Prompt {
  id: string;
  images: PromptImage[];
  en: { title: string; prompt: string; variations?: string[]; tags: string[] };
  ko: { title: string; prompt: string; variations?: string[]; tags: string[] };
  ja: { title: string; prompt: string; variations?: string[]; tags: string[] };
}

export const prompts: Prompt[] = [
  {
    id: "1",
    images: [
      { src: "/images/prompt1-1.webp", ai: "ChatGPT Image 2.0" },
      { src: "/images/prompt1-2.webp", ai: "ChatGPT Image 2.0" },
      { src: "/images/prompt1-3.webp", ai: "ChatGPT Image 2.0" },
      { src: "/images/prompt1-4.webp", ai: "ChatGPT Image 2.0" },
      { src: "/images/prompt1-5.webp", ai: "ChatGPT Image 2.0" },
      { src: "/images/prompt1-6.webp", ai: "ChatGPT Image 2.0" },
      { src: "/images/prompt1-7.webp", ai: "Grok Aurora" },
    ],
    en: {
      title: "Scandinavian Lifestyle Editorial",
      prompt:
        "The subject must be preserved exactly as they appear in the reference photo. The facial structure, eye shape, skin tone, hairstyle, smile, and overall impression must not be altered in any way. The natural beauty and unique atmosphere must be fully preserved, with no excessive retouching or style changes permitted. Changes are permitted only in camera angle, background, movement, and atmosphere. Global advertising campaign shoot for a high-end Scandinavian lifestyle brand. Vertical medium-shot studio portrait. The subject wears a premium off-white linen shirt and beige wide-leg pants, with the characteristic natural wrinkles and delicate texture of linen rendered realistically. Seated on a simple wooden chair, body slightly turned to the side, face looking directly at the camera. Posture is relaxed and natural yet maintains an elegant balance, conveying a calm smile and a composed, unhurried atmosphere. Background consists of a bright ivory or cream matte wall in a minimal Scandinavian interior space. Natural wood elements and soft light harmonize to create a warm, refined mood. Background elements are minimized while maintaining a natural sense of space and depth. Lighting is soft natural light streaming through large windows — gentle morning or late afternoon sunlight softly filling the space with very delicate, natural shadows. Skin retains actual skin texture down to fine nuances; hair features a subtle luminosity and dimension. Overall color palette centers on neutral tones of beige, ivory, cream, sand, and white. Warm, calm color grading emphasizes a luxurious mood. Photography style evokes COS, Arket, Muji, Aesop, Kinfolk, Cereal Magazine — premium minimal editorial. A lifestyle portrait where restrained beauty and natural elegance shine through. 85mm lens, f/2.8, ultra high resolution, soft natural window light, shallow depth of field, premium editorial photography, Scandinavian minimalist aesthetic, photorealistic, natural skin texture, subtle film grain, refined color grading, timeless elegance, magazine-quality portrait.",
      variations: [
        "The setting shifts to a sun-drenched Scandinavian kitchen with light oak cabinets and a marble countertop. The subject stands at the counter with one hand resting lightly on its surface, gazing softly toward the window. Hair flows naturally down over the shoulders, catching the warm morning light. The linen texture of the outfit glows gently in the diffused daylight, reinforcing a quiet domestic warmth.",
        "The background changes to a minimal Nordic living room with a low cream sofa, a raw oak coffee table, and a single large window framing a soft winter sky. The subject sits sideways on the sofa, one knee drawn up and arm resting along the backrest, looking toward the camera with a calm, composed expression. Hair is loosely released and falls naturally over one shoulder, adding softness to the clean geometric surroundings.",
        "The scene moves to an airy Scandinavian studio space with raw concrete walls and warm wooden flooring. The subject stands near a tall window, body angled slightly away from the camera, head turned back to look directly into the lens. Hair is fully down and gently swept to one side by a soft indoor breeze. The light creates a delicate backlit halo around the silhouette, giving the image a refined and editorial quality.",
        "The setting becomes a serene outdoor wooden deck surrounded by birch trees and soft northern light. The subject sits on the edge of a simple bench, leaning slightly forward with both hands resting on the knees, looking calmly ahead. Hair is loosely tied or partially pinned back with a few natural strands falling forward. The pale birch trunks and cool Nordic air complete the clean, elevated outdoor lifestyle aesthetic.",
        "The environment transitions to a quiet Nordic bookshop or library with white walls, natural wood shelves filled with minimal curated books, and warm ambient light. The subject leans against a bookshelf with arms loosely crossed, one foot slightly forward, glancing slightly off-camera with a thoughtful and intelligent expression. Hair is fully released, falling softly past the shoulders, adding a relaxed and intellectual warmth to the composed editorial mood.",
      ],
      tags: ["scandinavian", "lifestyle", "minimal editorial"],
    },
    ko: {
      title: "스칸디나비안 라이프스타일 에디토리얼",
      prompt:
        "레퍼런스 사진 속 인물을 메인 피사체로 사용합니다. 얼굴 구조, 눈 모양, 피부 톤, 헤어스타일, 미소, 전체적인 인상을 어떠한 방식으로도 변경하지 않습니다. 자연스러운 아름다움과 고유한 분위기를 완전히 보존하며, 과도한 리터칭이나 스타일 변경은 허용되지 않습니다. 변경이 허용되는 요소는 카메라 앵글, 배경, 움직임, 분위기뿐입니다. 고급 스칸디나비안 라이프스타일 브랜드의 글로벌 광고 캠페인 촬영입니다. 세로형 미디엄 샷 스튜디오 포트레이트로, 피사체는 오프화이트 프리미엄 린넨 셔츠와 베이지 와이드 레그 팬츠를 착용하며, 린넨 특유의 자연스러운 주름과 섬세한 텍스처가 사실적으로 표현됩니다. 단순한 나무 의자에 앉아 몸은 살짝 옆으로 틀고 얼굴은 카메라를 정면으로 바라봅니다. 자세는 여유롭고 자연스러우면서도 우아한 균형을 유지하며, 차분한 미소와 여유롭고 서두르지 않는 분위기를 전달합니다. 배경은 미니멀한 스칸디나비안 인테리어 공간의 밝은 아이보리 또는 크림 매트 벽면으로 구성됩니다. 천연 우드 요소와 부드러운 빛이 조화를 이루어 따뜻하고 세련된 무드를 만들어냅니다. 배경 요소는 자연스러운 공간감과 깊이감을 유지하면서 최소화합니다. 조명은 큰 창문을 통해 스며드는 부드러운 자연광으로, 은은한 아침 또는 오후 늦은 햇살이 공간을 가득 채우며 매우 섬세하고 자연스러운 그림자를 만들어냅니다. 피부는 미세한 뉘앙스까지 실제 피부 텍스처를 유지하며, 머리카락은 은은한 광택과 입체감이 살아있습니다. 전체 색감 팔레트는 베이지, 아이보리, 크림, 샌드, 화이트의 뉴트럴 톤을 중심으로 구성됩니다. 따뜻하고 차분한 색감 그레이딩이 럭셔리한 무드를 강조합니다. COS, 아르켓, 무지, 이솝, 킨포크, 시리얼 매거진을 연상시키는 프리미엄 미니멀 에디토리얼 스타일입니다. 절제된 아름다움과 자연스러운 우아함이 빛나는 라이프스타일 포트레이트입니다. 85mm 렌즈, f/2.8, 초고해상도, 부드러운 자연 창문 빛, 얕은 피사계 심도, 프리미엄 에디토리얼 사진, 스칸디나비안 미니멀리스트 미학, 사진적 사실감, 자연스러운 피부 텍스처, 미묘한 필름 그레인, 세련된 색감 그레이딩, 시대를 초월한 우아함, 매거진 퀄리티 포트레이트.",
      variations: [
        "배경은 라이트 오크 캐비닛과 대리석 카운터탑이 있는 햇살 가득한 스칸디나비안 키친으로 바뀌며, 피사체는 카운터 앞에 서서 한 손을 가볍게 표면 위에 올리고 창문 쪽을 부드럽게 바라봅니다. 머리카락은 어깨 아래로 자연스럽게 풀어 내려 따뜻한 아침 햇살을 받으며, 의상의 린넨 텍스처가 부드러운 자연광 속에서 은은하게 빛나 조용하고 따뜻한 일상의 아름다움을 완성합니다.",
        "배경은 로우 크림 소파와 원목 커피 테이블, 부드러운 겨울 하늘을 담은 커다란 창문이 있는 미니멀한 노르딕 거실로 바뀌며, 피사체는 소파에 옆으로 앉아 한쪽 무릎을 세우고 팔을 등받이에 올린 채 차분하고 단정한 표정으로 카메라를 바라봅니다. 머리카락은 자연스럽게 풀어 한쪽 어깨 위로 흘러내려 깔끔한 기하학적 공간에 부드러운 온기를 더합니다.",
        "장면은 원시 콘크리트 벽과 따뜻한 나무 바닥이 있는 에어리한 스칸디나비안 스튜디오 공간으로 이동하며, 피사체는 높은 창문 가까이 서서 몸을 카메라에서 살짝 비틀고 고개를 돌려 렌즈를 정면으로 바라봅니다. 머리카락은 완전히 풀어 내려 부드러운 실내 바람에 한쪽으로 자연스럽게 쓸리며, 빛이 실루엣 주변에 섬세한 역광 헤일로를 만들어 세련되고 에디토리얼한 품격을 완성합니다.",
        "배경은 자작나무 숲과 부드러운 북유럽 자연광으로 둘러싸인 고요한 야외 나무 데크로 설정되며, 피사체는 단순한 벤치 끝에 앉아 살짝 앞으로 기울인 채 양손을 무릎 위에 올리고 차분하게 정면을 바라봅니다. 머리카락은 느슨하게 묶거나 일부만 고정해 몇 가닥이 자연스럽게 앞으로 흘러내리며, 하얀 자작나무 줄기와 서늘한 노르딕 공기가 깔끔하고 격조 있는 아웃도어 라이프스타일 미학을 완성합니다.",
        "공간은 화이트 벽과 미니멀하게 큐레이션된 책들이 꽂힌 천연 우드 선반, 따뜻한 앰비언트 조명이 있는 조용한 노르딕 서점 또는 도서관으로 전환되며, 피사체는 책장에 팔을 가볍게 교차해 기대고 한발을 살짝 앞으로 내밀어 카메라에서 약간 비껴난 시선으로 사려 깊고 지적인 표정을 짓습니다. 머리카락은 완전히 풀어 어깨 아래로 부드럽게 흘러내려 단정한 에디토리얼 무드에 여유롭고 지성적인 따뜻함을 더합니다.",
      ],
      tags: ["스칸디나비안", "라이프스타일", "미니멀에디토리얼"],
    },
    ja: {
      title: "スカンジナビアンライフスタイルエディトリアル",
      prompt:
        "参照写真の被写体をそのままメイン被写体として使用する。顔の構造、目の形、肌のトーン、ヘアスタイル、笑顔、全体的な印象を一切変更しない。自然な美しさと独自の雰囲気を完全に保存し、過度なレタッチやスタイル変更は許可されない。変更が許可されるのはカメラアングル、背景、動き、雰囲気のみ。高級スカンジナビアンライフスタイルブランドのグローバル広告キャンペーン撮影。縦型ミディアムショットスタジオポートレート。被写体はオフホワイトのプレミアムリネンシャツとベージュワイドレッグパンツを着用し、リネン特有の自然なしわと繊細なテクスチャがリアルに表現される。シンプルな木製椅子に座り、体を少し横に向け、顔はカメラを正面に見つめる。姿勢はリラックスして自然でありながら優雅なバランスを保ち、穏やかな笑顔と落ち着いた余裕ある雰囲気を伝える。背景はミニマルなスカンジナビアンインテリア空間の明るいアイボリーまたはクリームのマット壁面。天然ウッド要素と柔らかい光が調和し、温かく洗練されたムードを生み出す。背景要素は自然な空間感と奥行きを保ちながら最小化する。照明は大きな窓から差し込む柔らかな自然光で、穏やかな朝または午後の陽光が空間を優しく満たし、非常に繊細で自然な影を作る。肌は細かなニュアンスまで実際の皮膚テクスチャを維持し、髪は微妙な光沢と立体感が生きている。全体のカラーパレットはベージュ、アイボリー、クリーム、サンド、ホワイトのニュートラルトーンを中心に構成される。温かく落ち着いたカラーグレーディングが高級感あるムードを強調する。COS、アーケット、無印良品、イソップ、キンフォーク、シリアルマガジンを想起させるプレミアムミニマルエディトリアルスタイル。抑制された美しさと自然な優雅さが輝くライフスタイルポートレート。85mmレンズ、f/2.8、超高解像度、柔らかな自然窓光、浅い被写界深度、プレミアムエディトリアル写真、スカンジナビアンミニマリスト美学、フォトリアリスティック、自然な肌テクスチャ、微妙なフィルムグレイン、洗練されたカラーグレーディング、時代を超えたエレガンス、マガジンクオリティポートレート。",
      variations: [
        "背景はライトオークキャビネットと大理石カウンタートップのある陽光あふれるスカンジナビアンキッチンに変わり、被写体はカウンターの前に立ち片手を表面に軽く置いて窓の方を柔らかく見つめる。髪は肩の下まで自然に解き放たれ温かな朝の光を受け、リネンテクスチャが柔らかな自然光の中で静かに輝き穏やかな日常の美しさを完成させる。",
        "背景はローなクリームソファと原木コーヒーテーブル、柔らかな冬空を映す大きな窓があるミニマルなノルディックリビングルームに変わり、被写体はソファに横向きに座り片膝を立て腕を背もたれに乗せて穏やかで端正な表情でカメラを見つめる。髪は自然に解かれ片方の肩の上に流れ落ちてクリーンなジオメトリックな空間に柔らかな温もりを加える。",
        "場面は未加工のコンクリート壁と温かな木製フローリングのあるエアリーなスカンジナビアンスタジオ空間に移り、被写体は高い窓の近くに立ち体をカメラから少し捻って頭を回転させレンズを正面に見つめる。髪は完全に解かれ柔らかな室内の風に片側へ自然に流れ、光がシルエットの周りに繊細なバックライトのヘイローを作り洗練されたエディトリアルな品格を完成させる。",
        "背景は白樺の木々と柔らかな北欧の自然光に囲まれた静かな屋外木製デッキに設定され、被写体はシンプルなベンチの端に座り少し前傾みに両手を膝の上に置いて穏やかに正面を見つめる。髪は緩くまとめるか一部だけ固定して数本が自然に前に流れ落ち、白い白樺の幹と涼しいノルディックの空気がクリーンで格調高いアウトドアライフスタイル美学を完成させる。",
        "空間はホワイトウォールとミニマルにキュレーションされた本が並ぶ天然ウッド棚、温かなアンビエント照明のある静かなノルディック書店または図書館に転換し、被写体は本棚に腕を軽く交差させてもたれ片足を少し前に出してカメラからやや外れた視線で思慮深く知的な表情を見せる。髪は完全に解かれ肩より下まで柔らかく流れ落ちて端正なエディトリアルムードにリラックスした知性的な温もりを加える。",
      ],
      tags: ["スカンジナビアン", "ライフスタイル", "ミニマルエディトリアル"],
    },
  },
  {
    id: "2",
    images: [
      { src: "/images/prompt2-1.webp", ai: "ChatGPT Image 2.0" },
      { src: "/images/prompt2-2.webp", ai: "ChatGPT Image 2.0" },
      { src: "/images/prompt2-3.webp", ai: "ChatGPT Image 2.0" },
      { src: "/images/prompt2-4.webp", ai: "ChatGPT Image 2.0" },
      { src: "/images/prompt2-5.webp", ai: "ChatGPT Image 2.0" },
      { src: "/images/prompt2-6.webp", ai: "ChatGPT Image 2.0" },
      { src: "/images/prompt2-7.webp", ai: "Grok Aurora" },
      { src: "/images/prompt2-8.webp", ai: "Grok Aurora" },
    ],
    en: {
      title: "Vintage Studio Portrait",
      prompt:
        "Use the woman from the reference photo as the main subject. Keep her exact facial features, hairstyle, skin tone, and expression perfectly unchanged, preserving all realism, emotional depth, and subtle facial lighting. Changes are permitted only in camera angle, background, motion, and atmosphere. The scene is a vertical medium-shot studio portrait. The woman sits on a simple wooden or metal stool with her upper body gently turned at a half-profile angle. One leg is lightly crossed over the other for a relaxed, composed posture, with hands resting naturally. The overall mood is quiet, calm, and restrained. The outer garment is an oversized shirt in faded olive, dusty khaki, or washed military green, made of soft-textured cotton with sleeves rolled to just below the elbow and natural subtle wrinkles. Underneath is a washed charcoal matte tee with no logos, worn slightly fitted. The trousers are wide-leg in deep charcoal or washed black, in matte heavy-duty cotton or wool blend with a straight silhouette and minimal folds. Accessories are none or extremely minimal — perhaps a simple old-style metal watch. The background is a heavy matte fabric backdrop in deep forest green, warm olive, or muted army green — velvet or thick cotton — with soft draping and subtle folds, the light falling off naturally toward the edges with a warm gradient. The lighting is warm nostalgic studio lighting at 4500–5000K. A large softbox creates wraparound illumination, with soft golden highlights on the skin and lifted shadows for a matte, low-contrast look. A gentle rim light runs along the cheek and hair, with a faint vignette around the edges. The overall mood is inspired by 70s to early-90s studio portraits. The camera is an 85mm vintage portrait lens at f/2.8 depth of field, with soft micro-contrast, slight halation, very fine film grain, and a matte warm-muted color profile. The color and style are based on a warm nostalgic palette combining golden skin tone, faded olive, dusty khaki, and charcoal. Finished with matte texture, lifted blacks, compressed highlights, and subtle organic film grain — overall targeting a soft, warm film portrait with restrained post-war aesthetic inspired by Kodak Portra.",
      variations: [
        "The background shifts from a studio fabric backdrop to an old workshop space with worn concrete walls and faded wooden shelves. Afternoon natural light streaming in at an angle through a side window floats alongside dust particles in the air, creating a nostalgic atmosphere. The woman leans lightly against the edge of an old wooden workbench instead of a stool, one hand resting on the table while her gaze turns toward the window in a contemplative pose, her hair loose and flowing naturally down over her shoulders. The subtle wrinkles of the washed military shirt and the texture of the aged space harmonize naturally to complete a deep, warm vintage mood.",
        "The background is set as a dark wood-toned library bookshelf packed tightly with old books, where the faded colors of book spines and the warm brown tones of the wood create a deep color harmony with the olive and charcoal outfit. The woman sits at a slight angle in a low leather armchair in front of the bookshelf, one elbow resting on the armrest and fingers lightly supporting her chin in an intellectual, relaxed pose, her hair flowing naturally down in front of one shoulder with soft texture alive in every strand. Warm lamp light entering from the side creates gentle chiaroscuro on one side of her face, completing a contemplative, literary atmosphere.",
        "The background is set inside an old café in the quiet early hours of dawn with no one around, where faded wooden tables, a steaming coffee cup, and blurred street lights outside the window create a quiet, solitary mood. The woman sits at a corner window seat, both hands lightly cupping the coffee cup while gazing out the window in an introspective, cinematic pose, her hair loose and flowing lightly to one side, naturally harmonizing with the quiet early morning emotion. The contrast between the cold dawn light filtering through the window and the warm lamplight on the table creates a lonely yet beautiful urban sensibility.",
        "The background is set in a quiet conifer forest with low morning mist, where pale light filtering through the trees mingles with the mist to create a still, meditative natural atmosphere. The woman sits on an old tree stump with both hands neatly placed on her knees and head slightly raised to gaze into the distant trees in a quiet, lyrical pose, her hair completely loose flowing down past her back, quietly draped in the damp forest air. The cold, soft natural light of the forest settles gently on the olive shirt and charcoal pants, completing a deep, lyrical sense of weight as if one with nature.",
        "The background is set inside an old jazz bar or vintage club with low warm amber lighting, where a dark wooden bar counter and dimly glowing glasses fill the entire space with a deep, mature atmosphere. The woman sits at a slight angle on a bar stool, one arm resting on the counter with her gaze fixed on the empty space beyond, in a slow, deep pose as if mulling something over. Her hair flows loose, glowing warmly under the amber light and falling naturally down in front of one shoulder. The amber lighting seeps richly into the olive shirt and charcoal pants, maximizing the nostalgic film emotion unique to Kodak Portra.",
      ],
      tags: ["vintage studio portrait", "film portrait", "military tone"],
    },
    ko: {
      title: "빈티지 스튜디오 포트레이트",
      prompt:
        "레퍼런스 사진 속 여성을 메인 피사체로 사용합니다. 얼굴 특징, 헤어스타일, 피부 톤, 표정을 완벽하게 그대로 유지하며, 현실감과 감정적 깊이, 미묘한 얼굴 조명도 모두 보존합니다. 변경이 허용되는 요소는 카메라 앵글, 배경, 움직임, 분위기뿐입니다. 장면은 세로형 미디엄 샷 스튜디오 포트레이트로 구성합니다. 여성은 단순한 나무 또는 금속 스툴에 앉아 있으며, 상체는 부드러운 반측면 방향으로 살짝 틀어져 있습니다. 한쪽 다리를 다른 쪽 위에 가볍게 올려 여유롭고 단정한 자세를 취하며, 손은 자연스럽게 놓여 있습니다. 전체적인 무드는 조용하고 차분하며 절제된 느낌입니다. 의상은 겉에 바랜 올리브, 먼지 낀 카키, 또는 워싱 밀리터리 그린 계열의 오버사이즈 셔츠를 입습니다. 부드러운 질감의 면 소재이며 소매는 팔꿈치 아래까지 접어 올리고 자연스러운 미세 주름이 있습니다. 안에는 로고 없는 워싱 차콜 매트 티셔츠를 약간 핏하게 받쳐 입습니다. 하의는 딥 차콜 또는 워싱 블랙 계열의 와이드 레그 팬츠로, 매트한 두꺼운 면 또는 울 혼방 소재에 직선적인 실루엣과 최소한의 주름이 특징입니다. 액세서리는 없거나 단순한 구형 메탈 시계 하나 정도로 극히 최소화합니다. 배경은 딥 포레스트 그린, 웜 올리브, 또는 뮤트 아미 그린 계열의 무거운 매트 패브릭으로, 벨벳 또는 두꺼운 면 소재입니다. 부드러운 드레이핑과 미묘한 주름이 있으며, 가장자리로 갈수록 따뜻한 그라데이션으로 자연스럽게 빛이 떨어집니다. 조명은 색온도 4500–5000K의 웜 노스탤직 스튜디오 조명을 사용합니다. 대형 소프트박스로 부드럽게 감싸는 조명을 만들고, 피부에는 은은한 골든 하이라이트를 주며 섀도우를 리프트해 매트하고 대비 없는 룩을 연출합니다. 뺨과 머리카락을 따라 은은한 림 라이트를 더하고, 가장자리에는 희미한 비네팅을 적용합니다. 전체적인 무드는 70년대에서 90년대 초 스튜디오 포트레이트에서 영감을 받았습니다. 카메라는 85mm 빈티지 포트레이트 렌즈에 f/2.8 심도로 촬영하며, 부드러운 마이크로 컨트라스트와 약한 할레이션, 매우 미세한 필름 그레인, 매트한 웜 뮤트 색감 프로파일을 적용합니다. 색감과 스타일은 골든 피부톤, 바랜 올리브, 먼지 낀 카키, 차콜을 조합한 웜 노스탤직 팔레트를 기반으로 합니다. 매트한 질감, 리프트된 블랙, 압축된 하이라이트, 미묘한 유기적 필름 그레인으로 마무리하며, 전체적으로 코닥 포트라에서 영감받은 절제된 전후 미학의 소프트하고 따뜻한 필름 포트레이트를 지향합니다.",
      variations: [
        "배경은 스튜디오 패브릭 대신 낡은 콘크리트 벽과 빛바랜 나무 선반이 있는 오래된 작업실 공간으로 바뀌며, 한쪽 창문에서 비스듬히 들어오는 오후의 자연광이 먼지 입자와 함께 공기 중에 부유하는 노스탤직한 분위기를 만들어냅니다. 여성은 스툴 대신 낡은 나무 작업대 모서리에 가볍게 기대어 한 손을 테이블 위에 얹고 시선을 창문 쪽으로 향하는 사색적인 자세를 취하며, 머리카락은 풀어 내려 어깨 위로 자연스럽게 흘러내립니다. 워싱 밀리터리 셔츠의 미세한 주름과 낡은 공간의 질감이 자연스럽게 어우러지며 깊고 따뜻한 빈티지 무드를 완성합니다.",
        "배경은 오래된 책들이 빼곡히 꽂힌 어두운 우드 톤의 서재 책장으로 설정되며, 책 등의 바랜 색감과 나무의 따뜻한 갈색 톤이 올리브와 차콜 의상과 깊은 색감의 조화를 이룹니다. 여성은 책장 앞 낮은 가죽 암체어에 비스듬히 앉아 한쪽 팔꿈치를 팔걸이에 올리고 손가락으로 턱을 가볍게 받치는 지적이고 여유로운 자세를 취하며, 머리카락은 한쪽 어깨 앞으로 자연스럽게 흘러내려 부드러운 결이 살아있습니다. 측면에서 들어오는 따뜻한 스탠드 조명이 얼굴 한쪽에 부드러운 명암을 만들며 사색적이고 문학적인 분위기를 완성합니다.",
        "배경은 이른 새벽 아무도 없는 오래된 카페 내부로 설정되며, 빛바랜 나무 테이블과 김이 오르는 커피잔, 흐릿한 창밖 거리 불빛이 조용하고 고독한 새벽의 분위기를 만들어냅니다. 여성은 창가 구석 자리에 앉아 두 손으로 커피잔을 가볍게 감싸 쥐고 창밖을 응시하는 내면적이고 영화적인 자세를 취하며, 머리카락은 풀어 내려 한쪽으로 가볍게 흘러내려 새벽의 고요한 감성과 자연스럽게 어우러집니다. 창문을 통해 스며드는 차가운 새벽빛과 테이블 위 따뜻한 조명이 대비를 이루며 쓸쓸하고 아름다운 도시의 감성을 완성합니다.",
        "배경은 새벽 안개가 낮게 깔린 조용한 침엽수 숲으로 설정되며, 나무 사이로 스며드는 옅은 빛과 안개가 뒤섞여 고요하고 명상적인 자연의 공기를 만들어냅니다. 여성은 오래된 나무 그루터기 위에 앉아 양손을 무릎 위에 가지런히 올리고 고개를 살짝 들어 먼 나무 사이를 바라보는 고요하고 서정적인 자세를 취하며, 머리카락은 완전히 풀어 내려 등 아래까지 자연스럽게 흘러내려 숲의 축축한 공기 속에 차분하게 드리워집니다. 숲의 차갑고 부드러운 자연광이 올리브 셔츠와 차콜 팬츠 위에 은은하게 내려앉으며 자연과 하나된 듯한 깊고 서정적인 무게감을 완성합니다.",
        "배경은 낮은 조도의 따뜻한 앰버 조명이 감도는 오래된 재즈 바 또는 빈티지 클럽 내부로 설정되며, 어두운 나무 바 카운터와 흐릿하게 빛나는 유리잔들이 공간 전체에 깊고 어른스러운 분위기를 채웁니다. 여성은 바 스툴에 비스듬히 앉아 한 팔을 카운터 위에 올리고 시선을 정면 너머 허공에 고정한 채 무언가를 곱씹는 듯한 느리고 깊은 자세를 취하며, 머리카락은 풀어 내려 앰버 조명 아래 따뜻하게 빛나며 한쪽 어깨 앞으로 자연스럽게 흘러내립니다. 앰버 조명이 올리브 셔츠와 차콜 팬츠 위에 농밀하게 스며들며 코닥 포트라 특유의 그리운 필름 감성을 극대화합니다.",
      ],
      tags: ["빈티지 스튜디오 포트레이트", "필름 포트레이트", "밀리터리톤"],
    },
    ja: {
      title: "ヴィンテージスタジオポートレート",
      prompt:
        "参照写真の女性をメイン被写体として使用する。顔の特徴、ヘアスタイル、肌のトーン、表情を完璧にそのまま維持し、リアリティ、感情的な深み、微妙な顔の照明もすべて保存する。変更が許可されるのはカメラアングル、背景、動き、雰囲気のみ。縦型ミディアムショットのスタジオポートレート。女性はシンプルな木製または金属製のスツールに座り、上半身は穏やかな半横向きに軽くひねった姿勢。片足をもう片方の上に組んでリラックスした落ち着いたポーズをとり、両手は自然に置かれている。全体的なムード：静かで落ち着き、抑制された雰囲気。衣装（上着）：色あせたオリーブ、くすんだカーキ、またはウォッシュドミリタリーグリーンのオーバーサイズシャツ。柔らかい質感のコットン素材で袖は前腕の中ほどまでまくり上げ、自然な微細なシワがある。インナー：ロゴなしのウォッシュドチャコールマットTシャツを少しフィットした形で重ね着。ボトムス：ディープチャコールまたはウォッシュドブラックのワイドレッグパンツ。マットな厚手コットンまたはウールブレンド素材で直線的なシルエットとシワが最小限。アクセサリー：なし、またはシンプルなオールドスタイルのメタルウォッチ程度に極力最小限。背景：ディープフォレストグリーン、ウォームオリーブ、またはミュートアーミーグリーンのヘビーマットファブリック（ベルベットまたは厚手コットン）のバックドロップ。柔らかなドレープと微妙なシワがあり、端に向かって温かなグラデーションで光が落ちる。ライティング：色温度4500〜5000Kのウォームノスタルジックスタジオ照明。大型ソフトボックスで包み込むような照明を作り、肌には柔らかなゴールデンハイライトを与えシャドウをリフトしてマットでコントラストの低いルックを演出。頬と髪に沿って穏やかなリムライトを加え、端に薄いビネットを適用。全体的なムードは70年代から90年代初頭のスタジオポートレートからインスパイアされている。カメラ：85mmビンテージポートレートレンズ、f/2.8の被写界深度。柔らかなマイクロコントラスト、わずかなハレーション、非常に微細なフィルムグレイン、マットなウォームミュートプロファイル。カラー/スタイル：ゴールデンスキントーン、色あせたオリーブ、くすんだカーキ、チャコールを組み合わせたウォームノスタルジックパレット。マットな質感、リフトされたブラック、圧縮されたハイライト、微妙なオーガニックフィルムグレイン。総合：コダックポートラにインスパイアされた抑制された戦後美学の柔らかく温かいフィルムポートレート。",
      variations: [
        "背景はスタジオのファブリックバックドロップではなく、古びたコンクリートの壁と色あせた木製の棚がある古い作業場の空間に変わり、片方の窓から斜めに差し込む午後の自然光が塵の粒子とともに空気中に漂い、ノスタルジックな雰囲気を作り出す。女性はスツールの代わりに古びた木製作業台の角に軽くもたれ、片手をテーブルの上に置き、窓の方向に視線を向ける物思いにふけるようなポーズをとり、髪を下ろして肩の上に自然に流す。ウォッシュドミリタリーシャツの微細なシワと古びた空間の質感が自然に調和し、深く温かいヴィンテージムードを完成させる。",
        "背景は古い本がびっしりと詰まった暗いウッドトーンの書斎の本棚に設定され、本の背表紙の色あせた色合いと木の温かい茶色のトーンがオリーブとチャコールの衣装と深い色感の調和をなす。女性は本棚の前の低い革張りのアームチェアに少し斜めに座り、片方の肘を肘掛けに乗せ指先で顎を軽く支えるインテリジェントで余裕のあるポーズをとり、髪は片方の肩の前に自然に流れ落ちて柔らかな質感が生きている。横から差し込む温かなスタンドの照明が顔の片側に柔らかな明暗を作り、物思いにふける文学的な雰囲気を完成させる。",
        "背景は誰もいない早朝の古いカフェの内部に設定され、色あせた木製テーブル、湯気の立つコーヒーカップ、ぼんやりと輝く窓の外の街の灯りが、静かで孤独な夜明けの雰囲気を作り出す。女性は窓際の隅の席に座り、両手でコーヒーカップを軽く包み込むように持ち、窓の外を見つめる内省的で映画的なポーズをとり、髪を下ろして片方に軽く流し、夜明けの静かな感性と自然に調和している。窓から染み込む冷たい夜明けの光とテーブルの上の温かな照明が対比をなし、もの悲しく美しい都会の感性を完成させる。",
        "背景は夜明けの霧が低く立ち込める静かな針葉樹の森に設定され、木々の間から差し込む淡い光と霧が混じり合い、静かで瞑想的な自然の空気を作り出す。女性は古い木の切り株の上に座り、両手を膝の上に揃えて置き、頭をわずかに持ち上げて遠くの木々の間を眺める静かで叙情的なポーズをとり、髪を完全に下ろして背中の下まで自然に流れ落ちさせ、森の湿った空気の中に静かに垂れている。森の冷たく柔らかな自然光がオリーブのシャツとチャコールのパンツの上に淡く降り注ぎ、自然と一体となったような深く叙情的な重みを完成させる。",
        "背景は低い照度の温かなアンバー照明が漂う古いジャズバーまたはヴィンテージクラブの内部に設定され、暗い木製のバーカウンターとぼんやりと光るグラスが空間全体に深く大人びた雰囲気を醸し出す。女性はバースツールに少し斜めに座り、片腕をカウンターの上に置き、視線を正面の虚空に固定したまま何かを思いめぐらすようなゆっくりとした深いポーズをとり、髪は下ろしてアンバー照明の下で温かく輝き片方の肩の前に自然に流れる。アンバー照明がオリーブのシャツとチャコールのパンツに濃く染み込み、コダックポートラ特有の懐かしいフィルム感性を最大化する。",
      ],
      tags: [
        "ヴィンテージスタジオポートレート",
        "フィルムポートレート",
        "ミリタリートーン",
      ],
    },
  },
  {
    id: "3",
    images: [
      { src: "/images/prompt3-1.webp", ai: "ChatGPT Image 2.0" },
      { src: "/images/prompt3-2.webp", ai: "ChatGPT Image 2.0" },
      { src: "/images/prompt3-3.webp", ai: "ChatGPT Image 2.0" },
      { src: "/images/prompt3-4.webp", ai: "ChatGPT Image 2.0" },
      { src: "/images/prompt3-5.webp", ai: "ChatGPT Image 2.0" },
      { src: "/images/prompt3-6.webp", ai: "Grok Aurora" },
      { src: "/images/prompt3-7.webp", ai: "Grok Aurora" },
      { src: "/images/prompt3-8.webp", ai: "ChatGPT Image 2.0" },
      { src: "/images/prompt3-9.webp", ai: "Grok Aurora" },
    ],
    en: {
      title: "Golden Field Editorial",
      prompt:
        "Use the woman from the reference photo as the main subject. Keep her exact facial features, hair style, skin tone, and expression perfectly unchanged. Preserve all realism, emotional depth, and subtle facial lighting without any alteration. Changes are permitted only in camera position, background, motion, and atmosphere. The scene is a vertical medium-shot outdoor editorial portrait. The woman leans lightly against a minimal structural prop — a simple painted metal bench or low railing — with one leg slightly forward and her arms resting naturally on the surface. Her posture is confident yet relaxed, with a gentle torso turn toward camera. The overall mood is cool, editorial, and quietly powerful. The clothing consists of an oversized single-breasted blazer in warm camel, nude tan, or soft terracotta — clean tailoring with a slightly relaxed silhouette, natural drape, and subtle fabric texture. Underneath is a fitted crewneck top in the same tonal family, monochromatic and seamless. The trousers are wide-leg in matching camel or warm beige, with a clean straight break at the ankle, minimal folds, and a matte smooth fabric finish. The shoes are simple black strappy flat sandals. Accessories include delicate long tassel earrings in warm gold or ivory, and thin-framed translucent blush or amber tinted glasses, both understated and elegant. The background is an open dry field or prairie landscape with golden dried grass, wild low shrubs, and a wide cinematic sky filled with large soft cumulus clouds. The horizon sits at mid-frame, creating a strong sense of openness and scale. The overall background palette is warm golden ochre at ground level transitioning into a soft hazy blue sky above. The lighting is natural golden-hour outdoor light with a warm directional sun source from the side and slightly behind, creating a soft luminous rim along the hair and shoulder. The front fill is soft and diffused, lifting shadows for a clean editorial look without harsh contrast. The overall quality is bright, airy, and warm with a slight haze. The camera uses an 85mm portrait lens at f/2.2 to f/2.8 depth of field, with the background softly blurred while retaining enough texture and detail to feel real. The optical quality is crisp with natural micro-contrast, very subtle halation on the rim light, and a faint warm color cast throughout. The color palette is built on warm earth tones — camel, nude, ochre, ivory — against a golden field and soft blue sky. Tones are clean and bright with lifted shadows, slightly compressed highlights, and a warm natural film-like grade. The overall aesthetic references contemporary Korean fashion editorial photography with a cinematic outdoor sensibility.",
      variations: [
        "The background shifts from the vast prairie to a quiet beach at dusk, where golden sand and a softly glowing horizon perfectly complement the camel-toned outfit. The woman drapes both arms over an old wooden beach fence and gazes at the horizon in a relaxed, contemplative pose, her hair completely down and blowing naturally in one direction in the sea breeze. The backlit golden-hour light creates a glowing halo across her entire hair, adding warm, cinematic depth to the scene.",
        "The background is set in a red ochre desert landscape, where rugged rocks, dry earth, and a vast sky powerfully resonate with the earth-tone palette of the camel outfit. The woman places one foot on a low sandstone rock and rests her elbow on her knee as she gazes toward the distant horizon in a strong, explorer-like pose. Her hair is loose and flows naturally backward in the dry wind, with strong natural light creating dramatic shadows on her skin and clothing.",
        "The background shifts to an autumn ginkgo-lined avenue with trees on both sides turning yellow, where falling yellow leaves and warm golden air create a perfect color harmony with the camel-tone outfit. The woman stands in the middle of the path between the trees, one hand lightly resting on a tree trunk and body slightly tilted toward the camera in a natural, emotional pose. Her hair is loose and flows naturally down over her shoulders, completing the lyrical quality of the season along with the occasional falling leaf.",
        "The background is set on a wide plain with low morning mist at dawn, where the faint mist softly wraps around the dry grass and horizon to create a dreamy, poetic atmosphere. The woman stands alone in the mist with her back to the camera gazing at the distant horizon, then turns her gaze over her shoulder in an epic, cinematic pose. Her hair is completely loose and quietly draped in the early morning air, adding a lonely yet beautiful sense of solitude to the entire scene.",
        "The background shifts to a Provençal countryside field with endless lavender in bloom, where the camel and nude toned outfit creates a rich complementary color tension against the lavender purple. The woman stands on a narrow dirt path between lavender rows, one hand gently brushing along the lavender stems with her gaze directed downward in an elegant, emotional pose. Her hair is loose and naturally tousled in the soft breeze, while warm Provençal sunlight washes the entire scene in golden light.",
      ],
      tags: [
        "twilight beach",
        "camel tone fashion",
        "autumn ginkgo avenue",
        "misty dawn plain",
        "lavender field",
      ],
    },
    ko: {
      title: "황금 들판의 에디토리얼",
      prompt:
        "레퍼런스 사진 속 여성을 메인 피사체로 사용합니다. 얼굴 특징, 헤어스타일, 피부 톤, 표정을 완벽하게 그대로 유지하며, 현실감과 감정적 깊이, 미묘한 얼굴 조명도 일체 변경 없이 보존합니다. 변경이 허용되는 요소는 카메라 앵글, 배경, 움직임, 분위기뿐입니다. 장면은 세로형 미디엄 샷 아웃도어 에디토리얼 포트레이트입니다. 여성은 단순한 페인트 칠된 금속 벤치 또는 낮은 난간 같은 미니멀한 구조물 소품에 가볍게 기대어 있으며, 한쪽 다리를 살짝 앞으로 내밀고 팔은 표면 위에 자연스럽게 올려놓습니다. 자세는 자신감 있으면서도 여유롭고, 상체는 카메라 방향으로 부드럽게 틀어져 있습니다. 전체적인 무드는 쿨하고 에디토리얼하며 조용한 파워감이 느껴집니다. 의상은 웜 카멜, 누드 탄, 또는 소프트 테라코타 계열의 오버사이즈 싱글 브레스트 블레이저로, 깔끔한 테일러링에 약간 여유 있는 실루엣과 자연스러운 드레이프, 미묘한 패브릭 질감이 특징입니다. 안에는 같은 톤 계열의 크루넥 탑을 모노크로매틱하고 매끄럽게 받쳐 입습니다. 하의는 카멜 또는 웜 베이지 계열의 와이드 레그 팬츠로, 발목에서 깔끔하게 떨어지는 스트레이트 라인과 최소한의 주름, 매트하고 부드러운 패브릭 마감이 특징입니다. 신발은 단순한 블랙 스트래피 플랫 샌들입니다. 액세서리는 웜 골드 또는 아이보리 계열의 섬세한 긴 태슬 귀걸이와 얇은 프레임의 반투명 블러시 또는 앰버 틴트 안경으로, 둘 다 절제되고 우아합니다. 배경은 황금빛 마른 풀과 낮은 야생 관목이 펼쳐진 드넓은 건조한 들판 또는 초원 풍경이며, 크고 부드러운 적운이 가득한 와이드 시네마틱 하늘이 펼쳐집니다. 지평선은 프레임 중간에 위치해 탁 트인 개방감과 스케일감을 만들어냅니다. 배경 전체 팔레트는 지면의 웜 골든 오커에서 위로 올라갈수록 부드러운 헤이지 블루 하늘로 자연스럽게 이어집니다. 조명은 측면 및 살짝 뒤쪽에서 들어오는 부드러운 발광 골든 아워 자연광으로, 머리카락과 어깨를 따라 은은한 림 라이트를 만들어냅니다. 전면 필 라이트는 부드럽고 확산되어 강한 대비 없이 섀도우를 자연스럽게 끌어올리며 깔끔한 에디토리얼 룩을 완성합니다. 전체적인 퀄리티는 밝고 에어리하며 따뜻하고 은은한 헤이즈가 감돕니다. 카메라는 85mm 포트레이트 렌즈에 f/2.2에서 f/2.8 심도로 촬영하며, 배경은 부드럽게 블러 처리되지만 실재감 있는 텍스처와 디테일은 충분히 살아있습니다. 광학적 퀄리티는 선명하고 자연스러운 마이크로 컨트라스트를 가지며, 림 라이트에 매우 미묘한 할레이션이 더해지고 전체적으로 은은한 웜 컬러 캐스트가 깔려 있습니다. 색감 팔레트는 카멜, 누드, 오커, 아이보리의 웜 어스 톤을 기반으로 골든 들판과 소프트 블루 하늘을 배경으로 구성됩니다. 톤은 깔끔하고 밝으며 리프트된 섀도우, 약간 압축된 하이라이트, 따뜻하고 자연스러운 필름 그레이드가 적용됩니다. 전체적인 미학은 시네마틱한 아웃도어 감성이 더해진 현대적인 한국 패션 에디토리얼 사진을 레퍼런스로 합니다.",
      variations: [
        "배경은 드넓은 초원 대신 황혼 무렵의 조용한 해변으로 바뀌며, 금빛으로 물든 모래사장과 은은하게 빛나는 수평선이 카멜 톤 의상과 완벽하게 어우러집니다. 인물은 해변의 낡은 나무 펜스에 양팔을 걸치고 수평선을 바라보는 여유롭고 사색적인 자세를 취하며, 머리카락은 완전히 풀어 해풍에 한 방향으로 자연스럽게 날립니다. 역광의 골든 아워 빛이 머리카락 전체에 빛나는 헤일로를 만들어내며 장면에 따뜻하고 시네마틱한 깊이를 더합니다.",
        "배경은 붉은 황토빛 사막 지형으로 설정되며, 거친 암석과 메마른 대지, 광활한 하늘이 카멜 톤 의상의 어스 톤 팔레트와 강렬하게 공명합니다. 인물은 낮은 사암 바위 위에 한쪽 발을 올리고 팔꿈치를 무릎에 올린 채 먼 지평선을 응시하는 강인하고 탐험가적인 자세를 취합니다. 머리카락은 풀어 내려 건조한 바람에 뒤쪽으로 자연스럽게 흩날리며, 강한 자연광이 피부와 의상에 드라마틱한 음영을 만들어냅니다.",
        "배경은 노랗게 물든 은행나무가 양쪽으로 늘어선 가을 가로수 길로 바뀌며, 떨어지는 노란 낙엽과 따뜻한 황금빛 공기가 카멜 톤 의상과 완벽한 색감의 조화를 이룹니다. 인물은 나무 사이 길 한가운데 서서 한 손을 가볍게 나무 기둥에 얹고 몸을 살짝 기울여 카메라를 바라보는 자연스럽고 감성적인 자세를 취합니다. 머리카락은 풀어 내려 어깨 위로 자연스럽게 흘러내리며, 간간이 내려앉는 낙엽과 함께 계절의 서정미를 완성합니다.",
        "배경은 새벽 안개가 낮게 깔린 넓은 평원으로 설정되며, 옅은 안개가 마른 풀밭과 지평선을 부드럽게 감싸 몽환적이고 시적인 분위기를 연출합니다. 인물은 안개 속에 홀로 서서 카메라를 등지고 먼 지평선을 바라보다 어깨 너머로 시선을 돌리는 서사적이고 영화적인 자세를 취합니다. 머리카락은 완전히 풀어 내려 새벽 공기 속에 고요하게 드리워지며, 전체 장면에 쓸쓸하고 아름다운 고독의 감성을 더합니다.",
        "배경은 보랏빛 라벤더가 끝없이 펼쳐진 프로방스풍 시골 들판으로 바뀌며, 카멜과 누드 톤의 의상이 라벤더 퍼플과 보색 대비를 이루며 장면에 풍부한 색감의 긴장감을 만들어냅니다. 인물은 라벤더 밭 사이 좁은 흙길 위에 서서 한 손으로 라벤더 줄기를 가볍게 쓸어내리며 시선은 아래를 향하는 우아하고 감성적인 자세를 취합니다. 머리카락은 풀어 내려 라벤더 향기가 스미는 듯한 부드러운 바람에 자연스럽게 흩날리며, 따뜻한 프로방스의 햇살이 전체 장면을 황금빛으로 물들입니다.",
      ],
      tags: [
        "황혼의 해변",
        "카멜톤 패션",
        "가을 은행나무 길",
        "안개 낀 새벽 평원",
        "라벤더 들판",
      ],
    },
    ja: {
      title: "黄金の野原のエディトリアル",
      prompt:
        "参照写真の女性をメイン被写体として使用する。顔の特徴、ヘアスタイル、肌のトーン、表情を完璧にそのまま維持し、リアリティ、感情的な深み、微妙な顔の照明も一切変更なく保存する。変更が許可されるのはカメラアングル、背景、動き、雰囲気のみ。縦型ミディアムショットのアウトドアエディトリアルポートレート。女性はシンプルなペイント仕上げの金属ベンチまたは低いレールのようなミニマルな構造物の小道具に軽くもたれており、片足をわずかに前に出し、腕は表面の上に自然に置いている。ポーズは自信がありながらも余裕があり、上半身はカメラ方向に優しくひねられている。全体的なムードはクールでエディトリアル、静かなパワーを感じさせる。衣装はウォームキャメル、ヌードタン、またはソフトテラコッタ系のオーバーサイズシングルブレストブレザーで、クリーンなテーラリングにやや余裕のあるシルエット、自然なドレープ、微妙なファブリックテクスチャーが特徴。インナーは同系トーンのクルーネックトップをモノクロマティックにすっきりと重ね着。ボトムスはキャメルまたはウォームベージュ系のワイドレッグパンツで、足首できれいに落ちるストレートラインと最小限のシワ、マットでなめらかなファブリック仕上げが特徴。シューズはシンプルなブラックストラッピーフラットサンダル。アクセサリーはウォームゴールドまたはアイボリー系の繊細なロングタッセルピアスと薄いフレームの半透明ブラッシュまたはアンバータイントのメガネで、どちらも抑制されたエレガントな印象。背景は黄金色の枯れ草と低い野生の低木が広がる広大な乾燥した野原または草原の風景で、大きくふわりとした積雲が広がるワイドなシネマティックな空が広がっている。地平線はフレームの中間に位置し、広大な開放感とスケール感を生み出す。背景全体のパレットは地面のウォームゴールデンオーカーから上に向かって柔らかなヘイジーブルーの空へと自然につながる。照明は側面とやや後方からの柔らかく輝くゴールデンアワーの自然光で、髪と肩に沿って繊細なリムライトを作り出す。フロントフィルライトは柔らかく拡散し、強いコントラストなく影を自然に持ち上げてクリーンなエディトリアルルックを完成させる。全体的なクオリティは明るくエアリーで温かく、微妙なヘイズが漂う。カメラは85mmポートレートレンズでf/2.2からf/2.8の被写界深度で撮影し、背景は柔らかくブラー処理されるが実在感のあるテクスチャーとディテールは十分に生きている。光学的クオリティはシャープで自然なマイクロコントラストを持ち、リムライトに非常に微妙なハレーションが加わり全体的に淡いウォームカラーキャストが敷かれている。カラーパレットはキャメル、ヌード、オーカー、アイボリーのウォームアーストーンを基調に、ゴールデンフィールドとソフトブルーの空を背景に構成される。トーンはクリーンで明るく、リフトされたシャドウ、やや圧縮されたハイライト、温かく自然なフィルムグレードが適用される。全体的な美学はシネマティックなアウトドア感性が加わった現代の韓国ファッションエディトリアル写真をレファレンスにしている。",
      variations: [
        "背景は広大な草原から夕暮れ時の静かな海辺に変わり、黄金色に染まった砂浜とほのかに輝く水平線がキャメルトーンの衣装と完璧に調和する。女性は海辺の古い木製フェンスに両腕を掛けて水平線を見つめる余裕があり物思いにふけるようなポーズをとり、髪を完全に下ろして海風に一方向へ自然になびかせる。逆光のゴールデンアワーの光が髪全体に輝くヘイローを作り出し、シーンに温かくシネマティックな深みを加える。",
        "背景は赤い黄土色の砂漠の地形に設定され、荒々しい岩と乾燥した大地、広大な空がキャメルトーンの衣装のアーストーンパレットと力強く共鳴する。女性は低い砂岩の岩の上に片足を乗せ、ひじを膝の上に置き、遠い地平線を見つめる強靭で探検家のようなポーズをとる。髪は下ろして乾燥した風に後ろへ自然になびき、強い自然光が肌と衣装にドラマティックな陰影を作り出す。",
        "背景は両側に黄色く色づいた銀杏の木が並ぶ秋の並木道に変わり、落ちる黄色い落ち葉と温かな黄金色の空気がキャメルトーンの衣装と完璧な色感の調和をなす。女性は木々の間の道の真ん中に立ち、片手を軽く木の幹に当て体をわずかにカメラ方向に傾けて自然でエモーショナルなポーズをとる。髪を下ろして肩の上へ自然に流れ落ち、時折舞い落ちる落ち葉とともに季節の叙情的な美を完成させる。",
        "背景は夜明けに低く霧が立ち込める広い平原に設定され、淡い霧が枯れた草原と地平線を柔らかく包み込み幻想的で詩的な雰囲気を演出する。女性は霧の中に一人立ってカメラに背を向け遠い地平線を見つめ、それから肩越しに視線を向ける叙事的で映画的なポーズをとる。髪を完全に下ろして夜明けの空気の中に静かに垂れ、シーン全体にもの悲しく美しい孤独の感性を加える。",
        "背景はプロヴァンス風の田舎の野原でラベンダーが果てしなく広がり、キャメルとヌードトーンの衣装がラベンダーパープルと補色対比をなしてシーンに豊かな色感の緊張を生み出す。女性はラベンダー畑の間の狭い土道に立ち、片手でラベンダーの茎を軽くなでながら視線を下に向ける優雅でエモーショナルなポーズをとる。髪を下ろしてラベンダーの香りが染み込むような柔らかな風に自然になびき、温かなプロヴァンスの陽光がシーン全体を黄金色に染める。",
      ],
      tags: [
        "夕暮れのビーチ",
        "キャメルトーンファッション",
        "秋の銀杏並木",
        "霧の夜明け平原",
        "ラベンダー畑",
      ],
    },
  },
  {
    id: "4",
    images: [
      { src: "/images/prompt4-1.webp", ai: "ChatGPT Image 2.0" },
      { src: "/images/prompt4-2.webp", ai: "ChatGPT Image 2.0" },
      { src: "/images/prompt4-3.webp", ai: "ChatGPT Image 2.0" },
      { src: "/images/prompt4-4.webp", ai: "ChatGPT Image 2.0" },
    ],
    en: {
      title: "Elegant Wedding Portrait",
      prompt:
        "Use the woman from the reference photo as the main subject. Keep her exact facial features, hairstyle, skin tone, and expression perfectly unchanged, and preserve all realism, emotional depth, and subtle facial lighting without any alteration. Changes are permitted only in camera angle, background, movement, and atmosphere. The scene is a vertical full-body editorial portrait shot in a grand European classic interior space. The woman stands or lightly leans against a vintage tufted ivory sofa with gilded carved wooden legs, her posture poised and graceful, turned at a gentle three-quarter angle toward the camera. One hand rests softly on the dress skirt while the other hangs naturally at her side. The overall mood is cinematic, timeless, and quietly aristocratic. The outfit is a strapless ball gown wedding dress with a corset bodice richly embellished with delicate floral lace appliqué, pearl accents, and crystal beading. The skirt is full and structured in soft ivory or warm white duchess satin, with a long sweeping train that spreads elegantly across the floor. The silhouette is a classic princess line with naturally dramatic volume. The accessories include a full silver crystal tiara, delicate and refined, set atop an elegant updo. The makeup is a polished bridal look with defined brows, a deep berry or wine-toned lip, and soft, luminous skin. The background is a grand European classic salon interior with warm cream panel walls featuring elaborate white plaster moldings and carved decorative frames. A large oil painting in a gilded baroque frame hangs at the center of the back wall. A gold and crystal chandelier is partially visible at the top of the frame. The floor is rich dark herringbone parquet wood, partially covered by a vintage Persian rug in deep red, navy, and ivory tones. A decorative stone pedestal column stands to one side. The entire space evokes the atmosphere of a 19th-century French château or aristocratic manor. The lighting is warm indoor ambient, with a soft side window source creating a delicate, luminous glow on the skin and dress. Shadows are lifted bright and airy with no harsh contrast. The overall quality is soft and romantic, based on warm cream and ivory tones with a subtle film sensibility. A gentle warm haze permeates the entire interior. The camera uses an 85mm to 100mm portrait lens at f/2.0 to f/2.8 depth of field, softly separating the subject from the background while retaining the rich interior details. The optical rendering is soft and romantic with natural micro-contrast and a very subtle warm color cast. The color palette is built on muted warm beige of the classic interior against ivory, warm white, cream, blush gold, and a deep wine lip. Tones are soft and refined with lifted shadows, gently compressed highlights, and a warm analog film sensibility. The overall aesthetic references fine art bridal editorial photography with a European classical painterly sensibility.",
      variations: [
        "The space expands into a more magnificent palace ballroom, with a high ceiling and a massive chandelier pouring light down from the center. Marble floors and gilded columns add depth to the background.",
        "The background shifts from an indoor salon to the outdoor garden of a European aristocratic estate, where soft natural light wraps around the subject beneath a stone arch covered in white roses and ivy. The dress train spreads naturally across the grass.",
        "The subject stands directly in front of a large arched window, and the soft backlight streaming in from outside gently envelops the entire dress and silhouette, creating a dreamy, painterly atmosphere.",
        "The space is set in the evening, with candlelight from chandeliers and candelabras warming the interior dramatically. The golden glow reflects off the dress satin, completing a deep and romantic atmosphere.",
      ],
      tags: ["wedding", "bridal", "fine art"],
    },
    ko: {
      title: "우아한 결혼식 인물 사진",
      prompt:
        "레퍼런스 사진 속 여성을 메인 피사체로 사용합니다. 얼굴 특징, 헤어스타일, 피부 톤, 표정을 완벽하게 그대로 유지하며, 현실감과 감정적 깊이, 미묘한 얼굴 조명도 일체 변경 없이 보존합니다. 변경이 허용되는 요소는 카메라 앵글, 배경, 움직임, 분위기뿐입니다. 장면은 화려한 유럽 클래식 인테리어 공간에서 촬영한 세로형 풀바디 에디토리얼 포트레이트입니다. 여성은 금색 조각 나무 다리가 달린 빈티지 터프티드 아이보리 소파에 서 있거나 가볍게 기대어 있으며, 자세는 단정하고 기품 있게 카메라를 향해 부드러운 쓰리쿼터 방향으로 틀어져 있습니다. 한 손은 드레스 스커트 위에 부드럽게 올려놓고, 다른 손은 자연스럽게 옆으로 내려놓습니다. 전체적인 무드는 시네마틱하고 시대를 초월하며 조용한 귀족적 품위가 느껴집니다. 의상은 섬세한 플로럴 레이스 아플리케, 진주 장식, 크리스탈 비딩으로 가득 수놓인 코르셋 보디스가 돋보이는 스트랩리스 볼가운 웨딩 드레스입니다. 스커트는 부드러운 아이보리 또는 웜 화이트 더체스 새틴 소재로 풍성하고 구조적이며, 바닥에 우아하게 퍼지는 긴 스위핑 트레인을 갖추고 있습니다. 실루엣은 클래식 프린세스 라인으로 드라마틱한 볼륨감이 자연스럽습니다. 액세서리는 실버 크리스탈 소재의 풀 티아라로 섬세하고 정제된 느낌이며, 우아한 업도 헤어 위에 얹혀 있습니다. 메이크업은 세련된 브라이덜 룩으로, 또렷한 눈썹, 딥 베리 또는 와인 톤의 립, 부드럽고 발광하는 피부로 완성됩니다. 배경은 정교한 화이트 석고 몰딩과 조각 장식 프레임이 있는 웜 크림 패널 벽면이 특징인 웅장한 유럽 클래식 살롱 인테리어입니다. 금색 바로크 프레임의 대형 유화가 뒤쪽 벽면 중앙에 걸려 있습니다. 금색과 크리스탈 샹들리에가 프레임 상단에 일부 보입니다. 바닥은 풍성한 다크 헤링본 파케 우드로, 딥 레드, 네이비, 아이보리 톤의 빈티지 페르시안 러그가 일부를 덮고 있습니다. 장식용 석조 페디스털 기둥이 한쪽에 서 있습니다. 공간 전체가 19세기 프랑스 샤토 또는 귀족 저택의 분위기를 풍깁니다. 조명은 측면에서 들어오는 부드러운 창문 광원이 피부와 드레스에 섬세하고 발광하는 글로우를 만들어내는 따뜻한 실내 앰비언트 조명입니다. 섀도우는 밝고 에어리하게 리프트되어 있으며 강한 대비는 없습니다. 전체적인 퀄리티는 부드럽고 로맨틱하며 웜 크림과 아이보리 톤을 기반으로 살짝 필름 감성이 느껴집니다. 실내 전체에 은은한 웜 헤이즈가 감돕니다. 카메라는 85mm에서 100mm 포트레이트 렌즈에 f/2.0에서 f/2.8 심도로 촬영하며, 풍성한 인테리어 디테일을 살리면서 피사체를 배경에서 부드럽게 분리합니다. 광학적 렌더링은 부드럽고 로맨틱하며 자연스러운 마이크로 컨트라스트와 매우 미묘한 웜 컬러 캐스트가 특징입니다. 색감 팔레트는 클래식 인테리어의 뮤트한 웜 베이지를 배경으로 아이보리, 웜 화이트, 크림, 블러시 골드, 딥 와인 립으로 구성됩니다. 톤은 부드럽고 격조 있으며, 리프트된 섀도우, 부드럽게 압축된 하이라이트, 따뜻한 아날로그 필름 감성으로 마무리됩니다. 전체적인 미학은 유럽 클래식 회화적 감성이 담긴 파인아트 브라이덜 에디토리얼 사진을 레퍼런스로 합니다.",
      variations: [
        "공간은 더욱 웅장한 궁전 무도회장으로 확장되며, 천장은 높고 거대한 샹들리에가 중앙에 가득 빛을 내리쏩니다. 대리석 바닥과 황금빛 기둥이 배경에 깊이감을 더합니다.",
        "배경은 실내 살롱 대신 유럽 귀족 저택의 야외 정원으로 바뀌며, 흰 장미와 아이비가 덮인 석조 아치 아래 부드러운 자연광이 인물을 감쌉니다. 드레스 트레인이 잔디 위에 자연스럽게 펼쳐집니다.",
        "인물은 큰 아치형 창문 바로 앞에 서 있으며, 창밖에서 들어오는 부드러운 역광이 드레스와 실루엣 전체를 은은하게 감싸 몽환적이고 회화적인 분위기를 만들어냅니다.",
        "공간은 저녁 시간대로 설정되며, 샹들리에와 캔들라브라의 촛불 조명이 실내를 따뜻하고 드라마틱하게 물들입니다. 황금빛 불빛이 드레스 새틴 위에 반사되며 깊고 로맨틱한 분위기를 완성합니다.",
      ],
      tags: ["웨딩", "브라이덜", "파인아트"],
    },
    ja: {
      title: "優雅なウェディングポートレート",
      prompt:
        "参照写真の女性をメイン被写体として使用する。顔の特徴、ヘアスタイル、肌のトーン、表情を完璧にそのまま維持し、リアリティ、感情的な深み、微妙な顔の照明も一切変更なく保存する。変更が許可されるのはカメラアングル、背景、動き、雰囲気のみ。壮麗なヨーロッパクラシックインテリア空間で撮影した縦型フルボディのエディトリアルポートレート。女性は金色の彫刻木製脚が付いたヴィンテージタフテッドアイボリーソファに立つか軽くもたれており、姿勢は端正で品格があり、カメラに向かって穏やかなスリークォーターの角度でひねられている。片手はドレスのスカートの上に柔らかく置き、もう片方の手は自然に横に下ろす。全体的なムードはシネマティックで時代を超え、静かな貴族的品格を感じさせる。衣装は繊細なフローラルレースアップリケ、パール装飾、クリスタルビーディングで豊かに飾られたコルセットボディスが際立つストラップレスボールガウンウェディングドレス。スカートは柔らかいアイボリーまたはウォームホワイトのダッチェスサテン素材で豊かで構造的であり、床に優雅に広がる長いスウィーピングトレインを備えている。シルエットはクラシックなプリンセスラインで劇的なボリューム感が自然。アクセサリーはシルバークリスタル素材のフルティアラで繊細かつ洗練された印象で、優雅なアップヘアの上に乗せられている。メイクアップは洗練されたブライダルルックで、くっきりした眉、ディープベリーまたはワイントーンのリップ、柔らかく輝く肌で完成される。背景は精巧なホワイト石膏モールディングと彫刻装飾フレームが施されたウォームクリームパネル壁面が特徴の壮大なヨーロッパクラシックサロンインテリア。金色バロックフレームの大型油絵が奥の壁面中央に掛けられている。金色とクリスタルのシャンデリアがフレーム上部に一部見える。床は豊かなダークヘリンボーンパーケウッドで、ディープレッド、ネイビー、アイボリートーンのヴィンテージペルシャラグが一部を覆っている。装飾用石造ペデスタルが一方の側に立っている。空間全体が19世紀フランスのシャトーまたは貴族の邸宅の雰囲気を醸し出す。照明は側面から差し込む柔らかな窓の光源が皮膚とドレスに繊細で輝くグローを作り出す温かな室内アンビエント照明。シャドウは明るくエアリーにリフトされており強いコントラストはない。全体的なクオリティは柔らかくロマンティックで、ウォームクリームとアイボリートーンを基調に僅かなフィルム感性が漂う。室内全体に淡いウォームヘイズが漂う。カメラは85mmから100mmのポートレートレンズでf/2.0からf/2.8の被写界深度で撮影し、豊かなインテリアディテールを活かしながら被写体を背景から柔らかく分離する。光学的レンダリングは柔らかくロマンティックで、自然なマイクロコントラストと非常に微妙なウォームカラーキャストが特徴。カラーパレットはクラシックインテリアのミュートなウォームベージュを背景にアイボリー、ウォームホワイト、クリーム、ブラッシュゴールド、ディープワインリップで構成される。トーンは柔らかく格調があり、リフトされたシャドウ、柔らかく圧縮されたハイライト、温かいアナログフィルム感性で仕上げられる。全体的な美学はヨーロッパクラシック絵画的感性が込められたファインアートブライダルエディトリアル写真をレファレンスにしている。",
      variations: [
        "空間はより壮麗な宮殿の舞踏会場へと広がり、天井は高く、巨大なシャンデリアが中央から眩い光を降り注ぐ。大理石の床と黄金の柱が背景に奥行きを加える。",
        "背景は室内のサロンからヨーロッパ貴族の邸宅の屋外庭園に変わり、白いバラとアイビーに覆われた石造りのアーチの下、柔らかな自然光が人物を包む。ドレスのトレインが芝生の上に自然に広がる。",
        "人物は大きなアーチ型の窓の真正面に立ち、窓の外から差し込む柔らかな逆光がドレスとシルエット全体を繊細に包み込み、幻想的で絵画的な雰囲気を作り出す。",
        "空間は夕暮れ時に設定され、シャンデリアとカンデラブラの蝋燭の明かりが室内を温かくドラマティックに染める。黄金色の光がドレスのサテンに反射し、深くロマンティックな雰囲気を完成させる。",
      ],
      tags: ["ウェディング", "ブライダル", "ファインアート"],
    },
  },
];

export function getPromptById(id: string): Prompt | undefined {
  return prompts.find((p) => p.id === id);
}
