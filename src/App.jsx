import { useEffect, useRef, useState } from 'react'

// Çok dilli içerik
const content = {
  tr: {
    title: "Frontend Developer & 3D Artist",
    scrollText: "Aşağı Kaydır",
    sections: {
      summary: {
        title: "Hakkımda",
        text: "Bilgisayar Mühendisliği mezunuyum. React, Next.js ve Tailwind CSS ile frontend geliştirme yapıyorum, aynı zamanda Blender ile 3D modelleme işleriyle uğraşıyorum. Kod yazmayı ve 3D sanat üretmeyi bir arada tutmayı seviyorum - bence ikisi birbirini çok güzel tamamlıyor."
      },
      skills: {
        title: "Teknik Beceriler",
        frontend: "Frontend",
        backend: "Backend",
        tools: "Araçlar",
        design: "3D & Tasarım"
      },
      education: {
        title: "Eğitim",
        uni: "Bilgisayar Mühendisliği Lisans",
        uniName: "Erzincan Binali Yıldırım Üniversitesi",
        uniDate: "2019 – 2025",
        high: "Mustafa Kemal Anadolu Lisesi",
        highDate: "2015 – 2019"
      },
      experience: {
        title: "İş Deneyimi",
        job1: {
          title: "Junior Developer",
          company: "Elmalı Tech",
          date: "03/2025 – 06/2025",
          tasks: [
            "MonGuardian projesinin geliştirmesinde yer aldım. Domain sağlığı, SEO takibi ve anlık durum güncellemelerini yöneten bir web izleme platformu.",
            "ElmaliCollectibles'ı yazdım. React.js, Firebase ve Tailwind CSS kullandım. Kullanıcı girişi, gerçek zamanlı veritabanı ve mobil uyumlu arayüz var.",
            "AdLambs'ı sıfırdan kurdum. Node.js, Express, PostgreSQL ve React TypeScript ile reklam takip sistemi. AWS S3 entegrasyonu da ben yaptım.",
            "Toplamda 10'dan fazla projede çalıştım - frontend, backend, mobil ve veritabanı taraflarında."
          ]
        },
        job2: {
          title: "Test Mühendisi Stajyer",
          company: "Pia Bilişim Hizmetleri",
          date: "07/2022 – 08/2022",
          tasks: [
            "Çevik bir ortamda manuel ve otomatik test süreçlerini öğrendim, uyguladım."
          ]
        }
      },
      projects: {
        title: "Projeler",
        items: [
          {
            name: "Restoran Yönetim Sistemi",
            desc: "Next.js 14, React 18, Tailwind CSS, Ant Design, Framer Motion ve Three.js kullandım. Gerçek zamanlı bildirimler, 3D animasyonlar ve ödeme sistemi ekledim. Docker ile AWS'e deploy ettim."
          },
          {
            name: "Kamera ile İşaret Dili Tespiti",
            desc: "TensorFlow/Keras ile CNN & LSTM modelleri eğittim. Türk işaret dilini tanıyan bir sistem yaptım. OpenCV ve CameraX ile veri topladım. 30 FPS'de %85+ doğruluk yakaladım, modeli 73MB'dan 18MB'a indirdim."
          },
          {
            name: "DigiRoom - Otel Yönetim Sistemi",
            desc: "Next.js, TypeScript ve React ile otel yönetim paneli geliştirdim. JWT auth, RESTful API, gerçek zamanlı dashboard ve oda servisi modülü var. Birden fazla oteli destekliyor."
          }
        ]
      },
      languages: {
        title: "Diller",
        items: ["Türkçe – Ana dil", "İngilizce – Orta (B1)", "Japonca – JLPT N3"]
      },
      certificates: {
        title: "Sertifikalar",
        items: [
          "Unity ile Dijital Oyun Geliştirmeye Giriş",
          "Unity ile 3D Oyun Geliştirme",
          "API ve API Testi",
          "DevOps Çözümleri (Jenkins)",
          "Yazılım Test Otomasyonu",
          "Photoshop",
          "İleri Seviye Blender",
          "React ile Web Programlama",
          "Zbrush"
        ]
      },
      reference: {
        title: "Referanslar",
        name: "Orhun Çimen",
        role: "Senior QA Engineer / Team Lead",
        email: "orhun.horhor@gmail.com"
      },
      contact: {
        title: "İletişim",
        portfolio: "3D Portfolyo",
        location: "İzmir, Türkiye"
      }
    },
    copyright: "© 2025 Buğra Kadıoğlu. Tüm hakları saklıdır."
  },
  en: {
    title: "Frontend Developer & 3D Artist",
    scrollText: "Scroll Down",
    sections: {
      summary: {
        title: "About Me",
        text: "I'm a Computer Engineering graduate. I build frontends with React, Next.js, and Tailwind CSS, and I also do 3D modeling in Blender. I love working at the intersection of code and art - they complement each other more than you'd think."
      },
      skills: {
        title: "Technical Skills",
        frontend: "Frontend",
        backend: "Backend",
        tools: "Tools",
        design: "3D & Design"
      },
      education: {
        title: "Education",
        uni: "Bachelor's in Computer Engineering",
        uniName: "Erzincan Binali Yıldırım University",
        uniDate: "2019 – 2025",
        high: "Mustafa Kemal Anatolian High School",
        highDate: "2015 – 2019"
      },
      experience: {
        title: "Work Experience",
        job1: {
          title: "Junior Developer",
          company: "Elmalı Tech",
          date: "03/2025 – 06/2025",
          tasks: [
            "Worked on MonGuardian - a web monitoring platform that tracks domain health, SEO metrics, and real-time status updates.",
            "Built ElmaliCollectibles from scratch using React.js, Firebase, and Tailwind CSS. Includes auth, real-time database, and responsive UI.",
            "Created AdLambs - an ad tracking and analytics platform with Node.js, Express, PostgreSQL, React TypeScript, and AWS S3.",
            "Contributed to 10+ projects spanning frontend, backend, mobile apps, and databases."
          ]
        },
        job2: {
          title: "Test Engineer Intern",
          company: "Pia Bilişim Services",
          date: "07/2022 – 08/2022",
          tasks: [
            "Learned and practiced manual and automated testing in an agile environment."
          ]
        }
      },
      projects: {
        title: "Projects",
        items: [
          {
            name: "Restaurant Management System",
            desc: "Built with Next.js 14, React 18, Tailwind CSS, Ant Design, Framer Motion, and Three.js. Added real-time notifications, 3D animations, and payment integration. Deployed on AWS with Docker."
          },
          {
            name: "Sign Language Detection with Camera",
            desc: "Trained CNN & LSTM models using TensorFlow/Keras to recognize Turkish sign language. Built a data pipeline with OpenCV and CameraX. Got 85%+ accuracy at 30 FPS and shrunk the model from 73MB to 18MB."
          },
          {
            name: "DigiRoom - Hotel Management System",
            desc: "Built a hotel management dashboard with Next.js, TypeScript, and React. Features JWT auth, RESTful API, real-time dashboard, room service ordering, and multi-hotel support."
          }
        ]
      },
      languages: {
        title: "Languages",
        items: ["Turkish – Native", "English – Intermediate (B1)", "Japanese – JLPT N3"]
      },
      certificates: {
        title: "Certificates",
        items: [
          "Introduction to Digital Game Development with Unity",
          "3D Game Development with Unity",
          "API and API Testing",
          "DevOps Solutions (Jenkins)",
          "Software Test Automation",
          "Photoshop",
          "Advanced Blender",
          "Web Programming with React",
          "Zbrush"
        ]
      },
      reference: {
        title: "References",
        name: "Orhun Çimen",
        role: "Senior QA Engineer / Team Lead",
        email: "orhun.horhor@gmail.com"
      },
      contact: {
        title: "Contact",
        portfolio: "3D Portfolio",
        location: "İzmir, Turkey"
      }
    },
    copyright: "© 2025 Buğra Kadıoğlu. All rights reserved."
  },
  jp: {
    title: "フロントエンド開発者 & 3Dアーティスト",
    scrollText: "下にスクロール",
    sections: {
      summary: {
        title: "自己紹介",
        text: "コンピュータ工学を専攻しました。React、Next.js、Tailwind CSSでフロントエンド開発をしながら、Blenderで3Dモデリングもやっています。コードとアートの両方が好きで、この二つを組み合わせることに面白さを感じています。"
      },
      skills: {
        title: "技術スキル",
        frontend: "フロントエンド",
        backend: "バックエンド",
        tools: "ツール",
        design: "3D＆デザイン"
      },
      education: {
        title: "学歴",
        uni: "コンピュータ工学学士",
        uniName: "エルジンジャン・ビナリ・ユルドゥルム大学",
        uniDate: "2019年 – 2025年",
        high: "ムスタファ・ケマル・アナトリア高校",
        highDate: "2015年 – 2019年"
      },
      experience: {
        title: "職歴",
        job1: {
          title: "ジュニア開発者",
          company: "Elmalı Tech",
          date: "2025年3月 – 2025年6月",
          tasks: [
            "MonGuardianの開発に携わりました。ドメインヘルス追跡、SEO監視、リアルタイムステータス更新ができるWeb監視プラットフォームです。",
            "ElmaliCollectiblesをゼロから作りました。React.js、Firebase、Tailwind CSSを使って、認証、リアルタイムDB、レスポンシブUIを実装しました。",
            "AdLambsを構築しました。Node.js、Express、PostgreSQL、React TypeScriptで広告追跡システムを作り、AWS S3も統合しました。",
            "合計10以上のプロジェクトに参加しました。フロントエンド、バックエンド、モバイル、データベースと幅広く経験しました。"
          ]
        },
        job2: {
          title: "テストエンジニアインターン",
          company: "Pia Bilişim Services",
          date: "2022年7月 – 2022年8月",
          tasks: [
            "アジャイル環境で手動テストと自動テストを学び、実践しました。"
          ]
        }
      },
      projects: {
        title: "プロジェクト",
        items: [
          {
            name: "レストラン管理システム",
            desc: "Next.js 14、React 18、Tailwind CSS、Ant Design、Framer Motion、Three.jsで作りました。リアルタイム通知、3Dアニメーション、決済システムを実装。DockerでAWSにデプロイしました。"
          },
          {
            name: "カメラによる手話検出",
            desc: "TensorFlow/KerasでCNN＆LSTMモデルを学習させて、トルコ手話を認識するシステムを作りました。OpenCVとCameraXでデータを集めました。30FPSで85%以上の精度を出し、モデルを73MBから18MBに圧縮しました。"
          },
          {
            name: "DigiRoom - ホテル管理システム",
            desc: "Next.js、TypeScript、Reactでホテル管理ダッシュボードを開発しました。JWT認証、RESTful API、リアルタイムダッシュボード、ルームサービス注文機能があります。複数ホテルに対応しています。"
          }
        ]
      },
      languages: {
        title: "言語",
        items: ["トルコ語 – 母国語", "英語 – 中級（B1）", "日本語 – JLPT N3"]
      },
      certificates: {
        title: "資格・認定",
        items: [
          "Unityによるデジタルゲーム開発入門",
          "Unityによる3Dゲーム開発",
          "APIとAPIテスト",
          "DevOpsソリューション（Jenkins）",
          "ソフトウェアテスト自動化",
          "Photoshop",
          "上級Blender",
          "Reactによるウェブプログラミング",
          "Zbrush"
        ]
      },
      reference: {
        title: "リファレンス",
        name: "オルフン・チメン",
        role: "シニアQAエンジニア / チームリード",
        email: "orhun.horhor@gmail.com"
      },
      contact: {
        title: "連絡先",
        portfolio: "3Dポートフォリオ",
        location: "イズミル、トルコ"
      }
    },
    copyright: "© 2025 Buğra Kadıoğlu. All rights reserved."
  }
}

function App() {
  const videoRef = useRef(null)
  const containerRef = useRef(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [lang, setLang] = useState('tr')
  
  const t = content[lang]

  useEffect(() => {
    const video = videoRef.current
    const container = containerRef.current

    if (!video || !container) return

    const handleScroll = () => {
      const scrollTop = window.scrollY
      const scrollHeight = container.scrollHeight - window.innerHeight
      const progress = Math.min(Math.max(scrollTop / scrollHeight, 0), 1)
      setScrollProgress(progress)

      if (video.duration && isVideoLoaded) {
        video.currentTime = progress * video.duration
      }
    }

    const handleVideoLoaded = () => {
      setIsVideoLoaded(true)
      video.pause()
    }

    video.addEventListener('loadedmetadata', handleVideoLoaded)
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      video.removeEventListener('loadedmetadata', handleVideoLoaded)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isVideoLoaded])

  return (
    <div ref={containerRef} className="scroll-container">
      {/* Language Selector */}
      <div className="language-selector">
        <button 
          className={lang === 'tr' ? 'active' : ''} 
          onClick={() => setLang('tr')}
        >
          TR
        </button>
        <button 
          className={lang === 'en' ? 'active' : ''} 
          onClick={() => setLang('en')}
        >
          EN
        </button>
        <button 
          className={lang === 'jp' ? 'active' : ''} 
          onClick={() => setLang('jp')}
        >
          日本語
        </button>
      </div>

      {/* Progress Bar */}
      <div className="progress-bar">
        <div 
          className="progress-fill" 
          style={{ height: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Scroll Indicator */}
      <div className={`scroll-indicator ${scrollProgress > 0.05 ? 'hidden' : ''}`}>
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span>{t.scrollText}</span>
      </div>

      {/* Fixed Video Background */}
      <div className="video-wrapper">
        <video
          ref={videoRef}
          className="background-video"
          src="/video/showreel.mp4"
          muted
          playsInline
          preload="auto"
        />
        <div className="video-overlay" />
      </div>

      {/* Scroll Content */}
      <div className="scroll-content">
        
        {/* Hero Section */}
        <section className="section hero-section">
          <div className={`hero-content ${scrollProgress < 0.15 ? 'visible' : ''}`}>
            <h1 className="name">AHMET BUĞRA KADIOĞLU</h1>
            {lang === 'jp' && <p className="name-katakana">アフメット・ブーラ・カドゥオール</p>}
            <p className="title-role">{t.title}</p>
            <div className="hero-contact">
              <span>📍 {t.sections.contact.location}</span>
              <span>📧 bgrkadioglu9@gmail.com</span>
              <span>📱 +90 553 305 22 52</span>
            </div>
          </div>
        </section>

        {/* Summary Section */}
        <section className="section">
          <div className={`content-card ${scrollProgress > 0.10 && scrollProgress < 0.25 ? 'visible' : ''}`}>
            <h2>{t.sections.summary.title}</h2>
            <p className="summary-text">{t.sections.summary.text}</p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="section">
          <div className={`content-card ${scrollProgress > 0.20 && scrollProgress < 0.35 ? 'visible' : ''}`}>
            <h2>{t.sections.skills.title}</h2>
            <div className="skills-container">
              <div className="skill-category">
                <h4>{t.sections.skills.frontend}</h4>
                <div className="skill-tags">
                  <span>React</span>
                  <span>Next.js</span>
                  <span>Tailwind CSS</span>
                  <span>TypeScript</span>
                </div>
              </div>
              <div className="skill-category">
                <h4>{t.sections.skills.backend}</h4>
                <div className="skill-tags">
                  <span>Node.js</span>
                  <span>Express.js</span>
                  <span>PostgreSQL</span>
                  <span>Supabase</span>
                  <span>Firebase</span>
                </div>
              </div>
              <div className="skill-category">
                <h4>{t.sections.skills.tools}</h4>
                <div className="skill-tags">
                  <span>Docker</span>
                  <span>AWS</span>
                  <span>Git</span>
                  <span>Jenkins</span>
                </div>
              </div>
              <div className="skill-category">
                <h4>{t.sections.skills.design}</h4>
                <div className="skill-tags">
                  <span>Blender</span>
                  <span>Photoshop</span>
                  <span>Zbrush</span>
                  <span>Maya</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="section">
          <div className={`content-card ${scrollProgress > 0.30 && scrollProgress < 0.45 ? 'visible' : ''}`}>
            <h2>{t.sections.education.title}</h2>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>{t.sections.education.uni}</h4>
                  <p className="institution">{t.sections.education.uniName}</p>
                  <span className="date">{t.sections.education.uniDate}</span>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>{t.sections.education.high}</h4>
                  <span className="date">{t.sections.education.highDate}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="section">
          <div className={`content-card wide ${scrollProgress > 0.40 && scrollProgress < 0.55 ? 'visible' : ''}`}>
            <h2>{t.sections.experience.title}</h2>
            <div className="experience-list">
              <div className="experience-item">
                <div className="exp-header">
                  <h4>{t.sections.experience.job1.title}</h4>
                  <span className="company">{t.sections.experience.job1.company}</span>
                  <span className="date">{t.sections.experience.job1.date}</span>
                </div>
                <ul className="exp-tasks">
                  {t.sections.experience.job1.tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
              </div>
              <div className="experience-item">
                <div className="exp-header">
                  <h4>{t.sections.experience.job2.title}</h4>
                  <span className="company">{t.sections.experience.job2.company}</span>
                  <span className="date">{t.sections.experience.job2.date}</span>
                </div>
                <ul className="exp-tasks">
                  {t.sections.experience.job2.tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="section">
          <div className={`content-card wide ${scrollProgress > 0.50 && scrollProgress < 0.65 ? 'visible' : ''}`}>
            <h2>{t.sections.projects.title}</h2>
            <div className="projects-grid">
              {t.sections.projects.items.map((project, i) => (
                <div className="project-card" key={i}>
                  <h4>{project.name}</h4>
                  <p>{project.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Languages & Certificates */}
        <section className="section">
          <div className={`content-card ${scrollProgress > 0.60 && scrollProgress < 0.75 ? 'visible' : ''}`}>
            <h2>{t.sections.languages.title}</h2>
            <div className="language-list">
              {t.sections.languages.items.map((item, i) => (
                <span key={i} className="lang-badge">{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className={`content-card ${scrollProgress > 0.70 && scrollProgress < 0.85 ? 'visible' : ''}`}>
            <h2>{t.sections.certificates.title}</h2>
            <div className="cert-grid">
              {t.sections.certificates.items.map((cert, i) => (
                <span key={i} className="cert-badge">{cert}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Reference */}
        <section className="section">
          <div className={`content-card ${scrollProgress > 0.80 && scrollProgress < 0.92 ? 'visible' : ''}`}>
            <h2>{t.sections.reference.title}</h2>
            <div className="reference-card">
              <h4>{t.sections.reference.name}</h4>
              <p>{t.sections.reference.role}</p>
              <a href={`mailto:${t.sections.reference.email}`}>{t.sections.reference.email}</a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section contact-section">
          <div className={`contact-box ${scrollProgress > 0.88 ? 'visible' : ''}`}>
            <h2>{t.sections.contact.title}</h2>
            
            <div className="contact-links">
              <a href="https://www.linkedin.com/in/ahmet-bugra-kadioglu-21065923b/" 
                 target="_blank" rel="noopener noreferrer" className="contact-link linkedin">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                <span>LinkedIn</span>
              </a>

              <a href="https://github.com/Efrosiyal" 
                 target="_blank" rel="noopener noreferrer" className="contact-link github">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                <span>GitHub</span>
              </a>

              <a href="https://www.artstation.com/bugrakadioglu" 
                 target="_blank" rel="noopener noreferrer" className="contact-link portfolio">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1 17.5v-4H8l5-9v5h3l-5 8z"/></svg>
                <span>Portfolio</span>
              </a>

              <a href="https://www.artstation.com/bugrakadioglu" 
                 target="_blank" rel="noopener noreferrer" className="contact-link artstation">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M0 17.723l2.027 3.505h.001a2.424 2.424 0 0 0 2.164 1.333h13.457l-2.792-4.838H0zm24-2.596l-5.939-10.29a2.43 2.43 0 0 0-2.109-1.218H9.982l9.466 16.39H24a2.42 2.42 0 0 0 2.418-2.418c0-.399-.106-.79-.3-1.14l-.118-.324zM8.687 14.729L5.687 9.5l-3 5.229h6z"/></svg>
                <span>ArtStation</span>
              </a>

              <a href="mailto:bgrkadioglu9@gmail.com" className="contact-link email">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>
                <span>Email</span>
              </a>

              <a href="https://wa.me/905533052252" 
                 target="_blank" rel="noopener noreferrer" className="contact-link whatsapp">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                <span>WhatsApp</span>
              </a>
            </div>

            <a href="https://www.artstation.com/bugrakadioglu" target="_blank" rel="noopener noreferrer" className="portfolio-btn">
              {t.sections.contact.portfolio} →
            </a>

            <p className="copyright">{t.copyright}</p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
