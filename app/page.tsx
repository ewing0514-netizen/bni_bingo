import Image from "next/image";
import HeroMotion from "./HeroMotion";

const navItems = ["關於分會", "線上優勢", "夥伴專區", "FAQ", "產業類別"];

const stats = [
  { value: "100%", label: "線上與會" },
  { value: "60+", label: "產業會員席位" },
  { value: "週三", label: "固定晨會" },
  { value: "6:30", label: "準時開始" },
];

const onlineBenefits = [
  {
    title: "不受地點限制",
    text: "會員可從辦公室、家中或出差地點登入例會，持續維持人脈連結與商務引薦節奏。",
  },
  {
    title: "節省通勤時間",
    text: "把早晨時間留給真正的交流、簡報與一對一會談，讓每一次參與都更有效率。",
  },
  {
    title: "線上分組交流",
    text: "透過結構化流程、分組討論與會員介紹，協助彼此更精準理解服務與客戶需求。",
  },
];

const reasons = [
  "每個產業類別保留獨家席位，降低同業競爭，提升引薦品質。",
  "線上會議流程成熟，適合跨縣市、跨時區與經常移動的專業人士。",
  "會員產業組成多元，讓商務合作從熟悉與信任開始累積。",
  "連結 BNI 全球網絡，讓本地服務有機會延伸到更大的商務圈。",
  "固定例會、商務簡報與一對一交流，讓人脈經營變成可持續的習慣。",
];

const industries = [
  "建築與空間",
  "金融與保險",
  "法律與會計",
  "行銷與設計",
  "科技與資訊",
  "教育與顧問",
  "健康與生活",
  "餐旅與活動",
  "貿易與製造",
];

const partners = [
  {
    name: "謝承儒",
    industry: "知識變現業",
    slogan: "知識變現找承儒\n讓你金雞大發爐",
    referrals: "企業培訓講師、身心靈講師、活動租借空間",
    group: "行銷顧問組",
    position: "主席",
    photoUrl:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663099967991/bhwtwH2kaJx7bLU4XVNFfD/partners/8-ZdkrRQoT6JhQHeHBW3tDi.jpeg",
  },
  {
    name: "林宜穎",
    industry: "動態錄影業",
    slogan: "動態錄影找宜穎\n增加你的影響力",
    referrals: "塔羅牌老師、風水命理師、中醫診所",
    group: "行銷顧問組",
    position: "副主席",
    photoUrl:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663099967991/bhwtwH2kaJx7bLU4XVNFfD/partners/9-lQCVfcKpaxP6IBZI3V87q.jpeg",
  },
  {
    name: "黃柔榛",
    industry: "室內設計業",
    slogan: "夢想住家 要成真\n室內設計 找柔榛",
    referrals: "驗屋業、軟裝家具業、智慧家庭系統",
    group: "住家裝修工程",
    position: "秘書財務",
    photoUrl:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663099967991/bhwtwH2kaJx7bLU4XVNFfD/partners/10-oAaVg8TpOSONY9-FpGY5o.jpeg",
  },
  {
    name: "徐睿君",
    industry: "資產配置業",
    slogan: "資產配置做得好\n一生富足沒煩惱",
    referrals: "會計師、中小企業主、地主",
    group: "資產管理",
    position: "活動協調員",
    photoUrl:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663099967991/bhwtwH2kaJx7bLU4XVNFfD/partners/11-tMUuFAJV-9sAKXmWISWAV.jpeg",
  },
  {
    name: "林軼芃",
    industry: "音響業",
    slogan: "音響問題找軼芃\n品質第一你會紅",
    referrals: "歌唱班 / 才藝教室、活動企劃 / 婚禮顧問、娛樂系統整合商",
    group: "商空裝修",
    position: "成長協調員",
    photoUrl:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663099967991/bhwtwH2kaJx7bLU4XVNFfD/partners/12-KU9vsqqSeaecfGzZWbuIY.jpeg",
  },
  {
    name: "劉冠亨",
    industry: "商空設計業",
    slogan: "商空設計 找冠亨\n開拓新局一定成",
    referrals: "診所開業顧問、診所營運顧問、醫療設備廠商",
    group: "商空裝修",
    position: "接待組組長",
    photoUrl:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663099967991/bhwtwH2kaJx7bLU4XVNFfD/partners/13-33Yq_U1lYJ_jOya0YdGOi.jpeg",
  },
  {
    name: "陳信寬",
    industry: "防水工程業",
    slogan: "告別漏水煩惱\n找回生活品質",
    referrals: "驗屋業、室內設計師、太陽能",
    group: "生活品質組",
    position: "網站管理員",
    photoUrl:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663099967991/bhwtwH2kaJx7bLU4XVNFfD/partners/14-BeDEE5uUmktT2b-QUuAn_.jpeg",
  },
  {
    name: "黃鈺展",
    industry: "茶品業",
    slogan: "選茶找進興\n把關一定行",
    referrals: "企業顧問、人資旅遊、民宿、婚禮顧問／喜餅",
    group: "生活品質組",
    position: "導師協調員",
    photoUrl:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663099967991/bhwtwH2kaJx7bLU4XVNFfD/partners/15-UMUJ1sk4w4GuLithePxDy.jpeg",
  },
  {
    name: "宋婕蓓",
    industry: "形象顧問",
    slogan: "專業形象找婕蓓\n讓你業績賺翻倍",
    referrals: "活動公關公司、福委會、護膚中心",
    group: "生活品質組",
    position: "教育協調員",
    photoUrl:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663099967991/bhwtwH2kaJx7bLU4XVNFfD/partners/16-rlIz1aqtSktwNqre3rf96.jpeg",
  },
  {
    name: "徐懿成",
    industry: "木地板工程",
    slogan: "地板問題WHO CARE\n懿成服務NO PROBLEM",
    referrals: "室內設計師、商空設計師、統包工程",
    group: "住家裝修工程",
    position: "組長",
    photoUrl:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663099967991/bhwtwH2kaJx7bLU4XVNFfD/partners/17-G04_csSFlBWWBbOiTmPLa.jpeg",
  },
];

const faqs = [
  {
    question: "什麼樣的人適合加入 BNI長鑽分會？",
    answer:
      "適合重視長期信任、願意主動引薦並希望穩定拓展客戶來源的企業主、業務主管、專業服務者與自由工作者。",
  },
  {
    question: "線上分會和實體分會有什麼不同？",
    answer:
      "線上分會保留 BNI 結構化例會與引薦制度，同時省下交通時間，讓跨區域會員也能穩定參與。",
  },
  {
    question: "一定要每週參加例會嗎？",
    answer:
      "穩定出席是建立信任與累積引薦成果的關鍵。分會通常會有明確的出席與替代代表規範。",
  },
  {
    question: "新創或個人品牌可以加入嗎？",
    answer:
      "可以。只要服務定位清楚、願意投入商務引薦文化，就能透過分會逐步建立可信任的合作網絡。",
  },
];

export default function Home() {
  return (
    <main>
      <header className="siteHeader">
        <a className="brand" href="#top" aria-label="長鑽分會首頁">
          <span className="brandMark" aria-hidden="true" />
          <span>
            <strong>長鑽分會</strong>
          </span>
        </a>
        <nav aria-label="主要導覽">
          {navItems.map((item) => (
            <a key={item} href={`#${item}`}>
              {item}
            </a>
          ))}
        </nav>
        <a className="headerCta" href="#加入會員">
          加入會員
        </a>
      </header>

      <section className="hero" id="top">
        <HeroMotion />
        <Image
          src="/diamond-hero.png"
          alt="黑色星空背景中的鑽石"
          fill
          priority
          sizes="100vw"
          className="heroImage"
        />
        <div className="heroOverlay" />
        <div className="heroContent">
          <p className="eyebrow">BNI Online Chapter</p>
          <h1>
            <span className="heroBrand">BNI長鑽分會</span>
            <span className="heroSlogan">加入長鑽，業績不斷</span>
          </h1>
          <p className="heroLead">
            實體分會，每週透過「信任感」建立強不可摧的商業合作
            <br />
            我們一起建立合作團隊
          </p>
          <p className="heroTagline">Stand by we! We are one team.</p>
          <div className="heroActions">
            <a className="primaryButton" href="#加入會員">
              加入會員
            </a>
            <a className="secondaryButton" href="#關於分會">
              了解分會
            </a>
          </div>
        </div>
        <div className="statStrip" aria-label="分會亮點">
          {stats.map((item) => (
            <div key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section intro" id="關於分會">
        <div className="sectionText">
          <p className="eyebrow">About Changzuan</p>
          <h2>專為現代商務節奏設計的線上分會</h2>
          <p>
            BNI長鑽分會透過固定線上例會，讓不同產業的專業人士在清楚的規則與互信基礎下交換商機。每位會員代表一個主要產業類別，彼此了解服務、客戶輪廓與合作機會後，再將適合的需求引薦給對方。
          </p>
          <p>
            例會時間暫定為每週三上午 6:30 至 8:30。早晨兩小時聚焦於會員介紹、商務教育、引薦分享與分組交流，讓人脈經營成為可被持續執行的商務系統。
          </p>
        </div>
        <div className="meetingPanel">
          <span>Weekly Meeting</span>
          <strong>每週三 06:30-08:30</strong>
          <p>線上準時開始，適合跨區域、跨城市與行程彈性的專業人士。</p>
        </div>
      </section>

      <section className="section band" id="線上優勢">
        <div className="sectionHeader">
          <p className="eyebrow">Online Advantage</p>
          <h2>線上商會的三個核心優勢</h2>
        </div>
        <div className="threeColumn">
          {onlineBenefits.map((item) => (
            <article className="card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section split">
        <div>
          <p className="eyebrow">What is BNI</p>
          <h2>全球商務引薦組織，讓信任成為可累積的商業資產</h2>
        </div>
        <p>
          BNI 以「Givers Gain」為核心精神，透過固定例會、會員教育與跨產業合作，協助會員建立長期且可追蹤的商務引薦關係。加入分會不只是交換名片，而是進入一套持續練習、分享與回饋的合作系統。
        </p>
      </section>

      <section className="section" id="加入理由">
        <div className="sectionHeader">
          <p className="eyebrow">Why Changzuan</p>
          <h2>選擇 BNI長鑽分會的理由</h2>
        </div>
        <div className="reasonGrid">
          {reasons.map((reason, index) => (
            <article className="reason" key={reason}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{reason}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section partnersSection" id="夥伴專區">
        <div className="sectionHeader">
          <p className="eyebrow">Partners</p>
          <h2>長鑽夥伴專區</h2>
          <p>
            參考長鑽分會協力團隊的夥伴展示方式，先以照片卡片呈現會員產業、個人 slogan、合作產業與團隊角色。
          </p>
        </div>
        <div className="partnerGrid">
          {partners.map((partner) => (
            <article className="partnerCard" key={partner.name}>
              <img src={partner.photoUrl} alt={`${partner.name} 夥伴照片`} />
              <div className="partnerShade" />
              <div className="partnerBadge">{partner.position}</div>
              <div className="partnerInfo">
                <p>{partner.slogan}</p>
                <span />
                <h3>{partner.name}</h3>
                <small>
                  {partner.industry} · {partner.group}
                </small>
                <em>合作產業：{partner.referrals}</em>
              </div>
            </article>
          ))}
        </div>
        <a
          className="textLink"
          href="https://bnipowerteam.manus.space/partners"
          target="_blank"
          rel="noopener noreferrer"
        >
          查看原夥伴頁
        </a>
      </section>

      <section className="section band" id="FAQ">
        <div className="sectionHeader">
          <p className="eyebrow">FAQ</p>
          <h2>常見問題</h2>
        </div>
        <div className="faqList">
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="section" id="產業類別">
        <div className="sectionHeader">
          <p className="eyebrow">Categories</p>
          <h2>正在拓展的產業類別</h2>
          <p>
            每個產業類別以一位主要會員為代表，以下分類可作為草稿版展示，後續可依實際分會名單調整。
          </p>
        </div>
        <div className="industryGrid">
          {industries.map((industry) => (
            <span key={industry}>{industry}</span>
          ))}
        </div>
      </section>

      <section className="joinSection" id="加入會員">
        <div>
          <p className="eyebrow">Join Us</p>
          <h2>想成為 BNI長鑽分會的一員？</h2>
          <p>
            先留下你的產業與服務資訊，我們將協助確認席位狀態，並安排你了解線上例會與會員申請流程。
          </p>
        </div>
        <a className="primaryButton" href="mailto:hello@example.com?subject=我想加入BNI長鑽分會">
          申請加入會員
        </a>
      </section>

      <footer className="footer">
        <div>
          <strong>BNI長鑽分會</strong>
          <p>線上商務引薦、跨產業交流、可信任會員網絡。</p>
        </div>
        <div className="footerLinks">
          <a href="#關於分會">關於分會</a>
          <a href="#夥伴專區">夥伴專區</a>
          <a href="#FAQ">FAQ</a>
          <a href="mailto:hello@example.com">Email</a>
        </div>
      </footer>
    </main>
  );
}
