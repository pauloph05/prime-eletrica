(() => {
  const WHATS_NUMBER = '5513991653227';
  const DEFAULT_MSG = 'Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento.%20Minha%20cidade%20%C3%A9%20____%20e%20meu%20bairro%20%C3%A9%20____.%20O%20servi%C3%A7o%20%C3%A9:%20____.';
  const waLink = `https://wa.me/${WHATS_NUMBER}?text=${DEFAULT_MSG}`;

  // Wire WhatsApp CTAs
  const ids = ['ctaWhats', 'ctaWhats2', 'ctaWhats3', 'ctaWhats4', 'whatsLink'];
  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.setAttribute('href', waLink);
  });

  // Year
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Mobile menu
  const menuBtn = document.getElementById('menuBtn');
  const menu = document.getElementById('menu');
  if (menuBtn && menu) {
    menuBtn.addEventListener('click', () => {
      const open = menu.classList.toggle('is-open');
      menuBtn.setAttribute('aria-expanded', String(open));
    });
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      menu.classList.remove('is-open');
      menuBtn.setAttribute('aria-expanded', 'false');
    }));
  }

  // Services data
  const services = [
    {
      icon: '🏠',
      name: 'Instalações Elétricas',
      pill: 'Residencial/Comercial',
      desc: 'Instalações novas, adequações e reformas elétricas com padrão técnico e segurança.'
    },
    {
      icon: '❄️',
      name: 'Instalação de Ar Condicionado',
      pill: 'Circuito correto',
      desc: 'Preparação elétrica e instalação adequada para evitar quedas de energia e sobrecarga.'
    },
    {
      icon: '🛠️',
      name: 'Manutenção Elétrica',
      pill: 'Preventiva/Corretiva',
      desc: 'Correção de falhas, curto, disjuntores, tomadas e revisão de instalações.'
    },
    {
      icon: '⚡',
      name: 'Quadro de Distribuição',
      pill: 'Organização',
      desc: 'Montagem, organização e manutenção de quadros, com identificação de circuitos.'
    },
    {
      icon: '📷',
      name: 'Câmeras de Segurança',
      pill: 'Monitoramento',
      desc: 'Instalação e configuração para acesso pelo celular, com orientação ao cliente.'
    },
    {
      icon: '🔒',
      name: 'Cerca Elétrica',
      pill: 'Proteção',
      desc: 'Instalação e manutenção de cerca elétrica para residências e comércios.'
    },
    {
      icon: '🚪',
      name: 'Portão Eletrônico',
      pill: 'Automação',
      desc: 'Instalação e automação de portões, motores e controles, com circuito dedicado.'
    },
    {
      icon: '🏡',
      name: 'Automação Residencial',
      pill: 'Casa inteligente',
      desc: 'Automação de iluminação, tomadas e dispositivos inteligentes (sob demanda).'
    }
  ];

  const grid = document.getElementById('servicesGrid');
  if (grid) {
    services.forEach(s => {
      const card = document.createElement('button');
      card.type = 'button';
      card.className = 'card service';
      card.innerHTML = `
        <div class="service__top">
          <div style="display:flex; align-items:center; gap:10px;">
            <span class="service__icon" aria-hidden="true">${s.icon}</span>
            <p class="service__name">${s.name}</p>
          </div>
          <span class="service__pill">${s.pill}</span>
        </div>
        <p class="service__desc">${s.desc}</p>
      `;

      card.addEventListener('click', () => {
        const msg = `Ol%C3%A1!%20Quero%20or%C3%A7amento%20para:%20${encodeURIComponent(s.name)}.%20Minha%20cidade%20%C3%A9%20____%20e%20meu%20bairro%20%C3%A9%20____.`;
        window.open(`https://wa.me/${WHATS_NUMBER}?text=${msg}`, '_blank', 'noopener');
      });

      grid.appendChild(card);
    });
  }
})();
