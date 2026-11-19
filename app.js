(function () {
  'use strict';

  // =========================================================================
  // Catálogo Completo de Hábitos, Recomendações para Iniciantes e Propostas
  // =========================================================================
  const HABIT_CATALOG = {
    leitura: {
      id: 'leitura',
      title: 'Leitura',
      category: 'Mente e imaginação',
      iconSelect: 'assets/94883.svg',
      iconToday: 'assets/158dd.svg',
      iconProfile: 'assets/07fc4.svg',
      iconCommCard: 'assets/9ae2f.svg',
      iconCommBanner: 'assets/9b8d4.svg',
      todayBoxBg: '#eee7fa',
      commCardBg: '#eee7fa',
      beginnerTip: 'Para iniciantes: 15 minutos (ou 5 páginas) antes de dormir criam o hábito sem cansar.',
      dailyUnit: 'min por dia',
      dailyStep: 5,
      dailyMin: 5,
      dailyMax: 120,
      weeklyUnit: 'dias por semana',
      monthlyUnit: 'dias no mês',
      presets: {
        iniciante: { daily: 15, weekly: 5, monthly: 20 },
        moderado:  { daily: 30, weekly: 6, monthly: 24 },
        intenso:   { daily: 45, weekly: 7, monthly: 28 }
      },
      streakPhrase: '7 dias de leitura em sequência',
      statMiddleTop: '7 dias',
      statMiddleSub: 'de leitura',
      todayEncourage: '23 pessoas do seu grupo já leram hoje.',
      featuredChallengeLines: ['7 dias de', 'leitura leve'],
      featuredChallengeSub: '128 pessoas cultivando o hábito de ler',
      community: {
        name: 'Eu leio antes de dormir',
        bannerLines: ['Eu leio antes', 'de dormir'],
        membersText: '1,2 mil membros · 23 lendo hoje',
        publicText: '1,2 mil membros · comunidade pública',
        challengeTitle: '7 noites, 7 páginas',
        challengeSub: '128 participantes · começa segunda',
        postLines: [
          'Hoje li só 5 páginas, mas troquei o celular',
          'pelo livro antes de dormir. Pequenas',
          'vitórias também são vitórias, né?'
        ],
        commentText: '5 páginas também contam. Vamos juntas!'
      }
    },

    estudar: {
      id: 'estudar',
      title: 'Estudar',
      category: 'Foco e aprendizado',
      iconSelect: 'assets/estudar.svg',
      iconToday: 'assets/estudar.svg',
      iconProfile: 'assets/estudar.svg',
      iconCommCard: 'assets/estudar.svg',
      iconCommBanner: 'assets/estudar-white.svg',
      todayBoxBg: '#e8f0fc',
      commCardBg: '#e4edf8',
      beginnerTip: 'Para iniciantes: 1 bloco de 30 minutos de foco sem celular rende mais que horas distraído.',
      dailyUnit: 'min por dia',
      dailyStep: 10,
      dailyMin: 15,
      dailyMax: 240,
      weeklyUnit: 'dias por semana',
      monthlyUnit: 'dias no mês',
      presets: {
        iniciante: { daily: 30, weekly: 5, monthly: 20 },
        moderado:  { daily: 60, weekly: 6, monthly: 24 },
        intenso:   { daily: 90, weekly: 7, monthly: 28 }
      },
      streakPhrase: '7 dias de estudo em sequência',
      statMiddleTop: '7 dias',
      statMiddleSub: 'de estudo',
      todayEncourage: '31 pessoas do seu grupo já estudaram hoje.',
      featuredChallengeLines: ['5 dias de', 'foco tranquilo'],
      featuredChallengeSub: '164 pessoas estudando com constância',
      community: {
        name: 'Foco tranquilo todo dia',
        bannerLines: ['Foco tranquilo', 'todo dia'],
        membersText: '1,5 mil membros · 31 estudando hoje',
        publicText: '1,5 mil membros · comunidade pública',
        challengeTitle: '5 blocos de 30 min na semana',
        challengeSub: '164 participantes · começa segunda',
        postLines: [
          'Estudei meus 30 minutos hoje logo cedo',
          'com o celular em outro cômodo. A sensação',
          'de dever cumprido dá muita paz!'
        ],
        commentText: 'Meia hora bem feita muda tudo. Parabéns!'
      }
    },

    agua: {
      id: 'agua',
      title: 'Beber água',
      category: 'Saúde e hidratação',
      iconSelect: 'assets/75fa8.svg',
      iconToday: 'assets/95b63.svg',
      iconProfile: 'assets/d60ea.svg',
      iconCommCard: 'assets/c40b0.svg',
      iconCommBanner: 'assets/c40b0.svg',
      todayBoxBg: '#e8f0fc',
      commCardBg: '#e4edf8',
      beginnerTip: 'Para iniciantes: comece com 6 copos (1,5L) deixando uma garrafinha sempre visível por perto.',
      dailyUnit: 'copos por dia',
      dailyStep: 1,
      dailyMin: 4,
      dailyMax: 16,
      weeklyUnit: 'dias por semana',
      monthlyUnit: 'dias no mês',
      presets: {
        iniciante: { daily: 6,  weekly: 5, monthly: 22 },
        moderado:  { daily: 8,  weekly: 7, monthly: 28 },
        intenso:   { daily: 10, weekly: 7, monthly: 30 }
      },
      streakPhrase: '7 dias de hidratação em sequência',
      statMiddleTop: '7 dias',
      statMiddleSub: 'hidratado(a)',
      todayEncourage: '42 pessoas do seu grupo bateram a meta de água hoje.',
      featuredChallengeLines: ['7 dias com a', 'garrafinha cheia'],
      featuredChallengeSub: '215 pessoas cuidando da hidratação',
      community: {
        name: 'Não é sede, é lembrete',
        bannerLines: ['Não é sede,', 'é lembrete'],
        membersText: '2,3 mil membros · dicas e incentivo',
        publicText: '2,3 mil membros · comunidade pública',
        challengeTitle: '1 copo d’água ao acordar',
        challengeSub: '215 participantes · começa segunda',
        postLines: [
          'Deixei a garrafinha na mesa do trabalho e',
          'consegui completar minha meta sem esforço.',
          'O corpo agradece demais!'
        ],
        commentText: 'Garrafinha por perto é o melhor segredo!'
      }
    },

    corpo: {
      id: 'corpo',
      title: 'Movimentar o corpo',
      category: 'Energia e bem-estar',
      iconSelect: 'assets/90474.svg',
      iconToday: 'assets/593cc.svg',
      iconProfile: 'assets/38691.svg',
      iconCommCard: 'assets/9d542.svg',
      iconCommBanner: 'assets/9d542.svg',
      todayBoxBg: '#f6ead8',
      commCardBg: '#f9e9d3',
      beginnerTip: 'Para iniciantes: 20 minutos de caminhada leve 3x na semana já despertam sua disposição.',
      dailyUnit: 'min por dia',
      dailyStep: 5,
      dailyMin: 10,
      dailyMax: 120,
      weeklyUnit: 'dias por semana',
      monthlyUnit: 'dias no mês',
      presets: {
        iniciante: { daily: 20, weekly: 3, monthly: 14 },
        moderado:  { daily: 30, weekly: 5, monthly: 20 },
        intenso:   { daily: 45, weekly: 6, monthly: 25 }
      },
      streakPhrase: '7 dias em movimento em sequência',
      statMiddleTop: '7 dias',
      statMiddleSub: 'de movimento',
      todayEncourage: '27 pessoas do seu grupo se movimentaram hoje.',
      featuredChallengeLines: ['7 dias em', 'movimento leve'],
      featuredChallengeSub: '142 pessoas caminhando no próprio ritmo',
      community: {
        name: 'Só mais uma voltinha',
        bannerLines: ['Só mais uma', 'voltinha'],
        membersText: '864 membros · 12 caminhando',
        publicText: '864 membros · comunidade pública',
        challengeTitle: '20 min de caminhada ao ar livre',
        challengeSub: '142 participantes · começa segunda',
        postLines: [
          'Estava sem ânimo, mas coloquei o tênis e',
          'dei uma volta de 20 minutos no quarteirão.',
          'Voltei com outra energia!'
        ],
        commentText: 'O mais difícil é sair do sofá. Mandou muito bem!'
      }
    },

    dormir: {
      id: 'dormir',
      title: 'Dormir melhor',
      category: 'Descanso e ritual noturno',
      iconSelect: 'assets/14462.svg',
      iconToday: 'assets/14462.svg',
      iconProfile: 'assets/14462.svg',
      iconCommCard: 'assets/14462.svg',
      iconCommBanner: 'assets/14462.svg',
      todayBoxBg: '#eee7fa',
      commCardBg: '#eee7fa',
      beginnerTip: 'Para iniciantes: desacelerar e deixar as telas de lado 30 min antes de deitar transforma seu sono.',
      dailyUnit: 'min sem telas antes',
      dailyStep: 10,
      dailyMin: 15,
      dailyMax: 120,
      weeklyUnit: 'noites por semana',
      monthlyUnit: 'noites no mês',
      presets: {
        iniciante: { daily: 30, weekly: 5, monthly: 20 },
        moderado:  { daily: 45, weekly: 6, monthly: 24 },
        intenso:   { daily: 60, weekly: 7, monthly: 28 }
      },
      streakPhrase: '7 noites dormindo melhor em sequência',
      statMiddleTop: '7 noites',
      statMiddleSub: 'de bom sono',
      todayEncourage: '19 pessoas do seu grupo cumpriram o ritual do sono.',
      featuredChallengeLines: ['7 noites de', 'sono restaurador'],
      featuredChallengeSub: '112 pessoas desacelerando antes de deitar',
      community: {
        name: 'Noites serenas, mente leve',
        bannerLines: ['Noites serenas,', 'mente leve'],
        membersText: '980 membros · 19 desacelerando hoje',
        publicText: '980 membros · comunidade pública',
        challengeTitle: '7 noites sem tela na cama',
        challengeSub: '112 participantes · começa segunda',
        postLines: [
          'Desliguei o celular 30 minutos antes de',
          'deitar e tomei um chá morno. Dormi a noite',
          'inteira sem acordar ansiosa!'
        ],
        commentText: 'Um ritual noturno calmo faz milagres pelo nosso descanso!'
      }
    },

    fumar: {
      id: 'fumar',
      title: 'Parar de fumar',
      category: 'Liberdade e saúde',
      iconSelect: 'assets/02281.svg',
      iconToday: 'assets/02281.svg',
      iconProfile: 'assets/02281.svg',
      iconCommCard: 'assets/02281.svg',
      iconCommBanner: 'assets/44482.svg',
      todayBoxBg: '#ddedaa',
      commCardBg: '#ddedaa',
      beginnerTip: 'Para iniciantes: celebre cada pausa consciente e cada dia livre. Um dia de cada vez é o segredo.',
      dailyUnit: 'pausas de respiro/dia',
      dailyStep: 1,
      dailyMin: 1,
      dailyMax: 15,
      weeklyUnit: 'dias livres/semana',
      monthlyUnit: 'dias livres/mês',
      presets: {
        iniciante: { daily: 3, weekly: 5, monthly: 21 },
        moderado:  { daily: 5, weekly: 6, monthly: 26 },
        intenso:   { daily: 7, weekly: 7, monthly: 30 }
      },
      streakPhrase: '7 dias livres em sequência',
      statMiddleTop: '7 dias',
      statMiddleSub: 'respirando livre',
      todayEncourage: '18 pessoas do seu grupo completaram mais um dia livre.',
      featuredChallengeLines: ['7 dias de', 'escolhas conscientes'],
      featuredChallengeSub: '94 pessoas apoiando umas às outras',
      community: {
        name: 'Respirar livre, um dia por vez',
        bannerLines: ['Respirar livre,', 'um dia por vez'],
        membersText: '740 membros · apoio diário',
        publicText: '740 membros · comunidade pública',
        challengeTitle: '7 dias trocando a vontade por água',
        challengeSub: '94 participantes · começa segunda',
        postLines: [
          'Quando bateu a vontade hoje à tarde,',
          'respirei fundo por 3 minutos e bebi água.',
          'Mais um dia vencido com tranquilidade!'
        ],
        commentText: 'Cada escolha conta demais. Estamos com você!'
      }
    }
  };

  // =========================================================================
  // Estado Central do Usuário no App
  // =========================================================================
  const state = {
    selectedHabits: [], // Começa vazio (em branco) na tela 01
    habitGoals: {},     // { [habitId]: { preset: 'iniciante', daily, weekly, monthly } }
    todayDone: {},      // { [habitId]: boolean }
    activeCommunityHabitId: 'leitura',
    calendarHabitIdx: 0,
    extraJoinedCommunities: new Set()
  };

  // Inicializa metas padrão (Iniciante Recomendado) para todos os hábitos
  Object.keys(HABIT_CATALOG).forEach((id) => {
    const def = HABIT_CATALOG[id].presets.iniciante;
    state.habitGoals[id] = {
      preset: 'iniciante',
      daily: def.daily,
      weekly: def.weekly,
      monthly: def.monthly
    };
    state.todayDone[id] = false;
  });

  // Retorna os hábitos ativos (ou ['leitura'] como fallback caso o usuário pule direto pelas abas do topo)
  function getActiveHabits() {
    return state.selectedHabits.length > 0 ? state.selectedHabits : ['leitura'];
  }

  function getPrimaryHabit() {
    const active = getActiveHabits();
    return HABIT_CATALOG[active[0]] || HABIT_CATALOG.leitura;
  }

  // =========================================================================
  // Navegação e Controle de Telas
  // =========================================================================
  const stage = document.getElementById('proto-stage');
  const tabBtns = document.querySelectorAll('.proto-TabBtn');
  const screenWrappers = document.querySelectorAll('.screen-Wrapper');
  const btnModeSingle = document.getElementById('btn-mode-single');
  const btnModeAll = document.getElementById('btn-mode-all');
  const toastEl = document.getElementById('proto-toast');
  let toastTimer = null;

  function showToast(msg) {
    if (!toastEl || !msg) return;
    toastEl.textContent = msg;
    toastEl.classList.add('is-visible');
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastEl.classList.remove('is-visible');
    }, 2500);
  }

  function goToScreen(screenId) {
    if (!screenId) return;

    // Sempre sincroniza as telas dependentes antes de exibir
    if (screenId === 'screen-02-goals') {
      renderGoalsScreen();
    } else if (
      screenId === 'screen-02' ||
      screenId === 'screen-03' ||
      screenId === 'screen-04' ||
      screenId === 'screen-05' ||
      screenId === 'screen-06'
    ) {
      syncAllDynamicScreens();
    }

    screenWrappers.forEach((w) => {
      w.classList.toggle('is-current', w.id === screenId);
    });
    tabBtns.forEach((btn) => {
      btn.classList.toggle('is-active', btn.getAttribute('data-target-screen') === screenId);
    });

    if (stage.classList.contains('mode-all')) {
      const targetEl = document.getElementById(screenId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  tabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-target-screen');
      goToScreen(target);
    });
  });

  if (btnModeSingle && btnModeAll) {
    btnModeSingle.addEventListener('click', () => {
      stage.classList.remove('mode-all');
      stage.classList.add('mode-single');
      btnModeSingle.classList.add('is-active');
      btnModeAll.classList.remove('is-active');
    });

    btnModeAll.addEventListener('click', () => {
      renderGoalsScreen();
      syncAllDynamicScreens();
      stage.classList.remove('mode-single');
      stage.classList.add('mode-all');
      btnModeAll.classList.add('is-active');
      btnModeSingle.classList.remove('is-active');
    });
  }

  document.querySelectorAll('[data-goto-screen]').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      const target = el.getAttribute('data-goto-screen');
      goToScreen(target);
    });
  });

  document.querySelectorAll('[data-toast]').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      showToast(el.getAttribute('data-toast'));
    });
  });

  // =========================================================================
  // Screen 00: Criar perfil + Modal de Termos e Política de Privacidade
  // =========================================================================
  const inputName = document.getElementById('input-profile-name');
  if (inputName) {
    inputName.addEventListener('input', () => {
      const fullName = inputName.value.trim() || 'Marina Oliveira';
      const firstName = fullName.split(' ')[0] || 'Marina';
      document.querySelectorAll('.user-full-name').forEach((el) => {
        el.textContent = fullName;
      });
      document.querySelectorAll('.user-first-name').forEach((el) => {
        el.textContent = firstName;
      });
    });
  }

  const inputPass = document.getElementById('input-profile-pass');
  const btnTogglePass = document.getElementById('btn-toggle-pass');
  let passVisible = false;
  if (inputPass && btnTogglePass) {
    btnTogglePass.addEventListener('click', () => {
      passVisible = !passVisible;
      if (passVisible) {
        const real = inputPass.getAttribute('data-real-value') || 'oca2026habitos';
        inputPass.value = real;
      } else {
        inputPass.setAttribute('data-real-value', inputPass.value);
        inputPass.value = '••••••••••••';
      }
    });
  }

  const checkboxTerms = document.getElementById('checkbox-terms');
  function setTermsChecked(checked) {
    if (!checkboxTerms) return;
    checkboxTerms.classList.toggle('is-checked', checked);
    checkboxTerms.setAttribute('aria-checked', String(checked));
    checkboxTerms.innerHTML = checked
      ? '<img src="assets/1d291.svg" alt="" width="14" height="14" style="display:block;" />'
      : '';
  }

  if (checkboxTerms) {
    checkboxTerms.addEventListener('click', () => {
      const isNowChecked = !checkboxTerms.classList.contains('is-checked');
      setTermsChecked(isNowChecked);
    });
  }

  // Modal de Termos de Uso e Política de Privacidade
  const termsModal = document.getElementById('terms-modal');
  const linkOpenTerms = document.getElementById('link-open-terms');
  const linkOpenPrivacy = document.getElementById('link-open-privacy');
  const cardOpenPrivacy = document.getElementById('card-open-privacy');
  const profileLinkPrivacy = document.getElementById('profile-link-privacy');
  const btnCloseTerms = document.getElementById('btn-close-terms');
  const btnCloseTermsX = document.getElementById('btn-close-terms-x');
  const btnAcceptTerms = document.getElementById('btn-accept-terms');
  const termsModalTitle = document.getElementById('terms-modal-title');

  function openTermsModal(sectionTitle) {
    if (!termsModal) return;
    if (termsModalTitle && sectionTitle) {
      termsModalTitle.textContent = sectionTitle;
    }
    termsModal.classList.add('is-open');
  }

  function closeTermsModal() {
    if (!termsModal) return;
    termsModal.classList.remove('is-open');
  }

  if (linkOpenTerms) {
    linkOpenTerms.addEventListener('click', (e) => {
      e.stopPropagation();
      openTermsModal('Termos de Uso · Oca');
    });
  }
  if (linkOpenPrivacy) {
    linkOpenPrivacy.addEventListener('click', (e) => {
      e.stopPropagation();
      openTermsModal('Política de Privacidade · Oca');
    });
  }
  if (cardOpenPrivacy) {
    cardOpenPrivacy.addEventListener('click', () => openTermsModal('Política de Privacidade · Oca'));
  }
  if (profileLinkPrivacy) {
    profileLinkPrivacy.addEventListener('click', () => openTermsModal('Termos e Política de Privacidade'));
  }
  if (btnCloseTerms) btnCloseTerms.addEventListener('click', closeTermsModal);
  if (btnCloseTermsX) btnCloseTermsX.addEventListener('click', closeTermsModal);
  if (btnAcceptTerms) {
    btnAcceptTerms.addEventListener('click', () => {
      setTermsChecked(true);
      closeTermsModal();
      showToast('Termos e Política de Privacidade aceitos!');
    });
  }
  if (termsModal) {
    termsModal.addEventListener('click', (e) => {
      if (e.target === termsModal) closeTermsModal();
    });
  }

  // =========================================================================
  // Screen 01: Escolha de hábitos (Começa em branco, permite 1 a 3 hábitos)
  // =========================================================================
  const habitCards = document.querySelectorAll('.habit-select-card');
  const btnContinueToGoals = document.getElementById('btn-continue-to-goals');
  const btnContinueHabitsText = document.getElementById('btn-continue-habits-text');

  function updateHabitSelectionUI() {
    const count = state.selectedHabits.length;

    habitCards.forEach((card) => {
      const habitId = card.getAttribute('data-habit-id');
      const isSelected = state.selectedHabits.includes(habitId);
      card.classList.toggle('is-selected', isSelected);

      const symbolBg = card.querySelector('.habit-symbol-bg');
      const checkBox = card.querySelector('.habit-check-box');
      const checkIcon = card.querySelector('.habit-check-icon');

      if (isSelected) {
        card.style.backgroundColor = '#eee7fa';
        card.style.borderColor = '#b69bdd';
        if (symbolBg) symbolBg.style.backgroundColor = '#e2d6f5';
        if (checkBox) {
          checkBox.style.backgroundColor = '#8fd2fa';
          checkBox.style.border = 'none';
        }
        if (checkIcon) {
          checkIcon.style.display = 'flex';
        }
      } else {
        card.style.backgroundColor = '#ffffff';
        card.style.borderColor = '#e9e3ee';
        if (symbolBg) symbolBg.style.backgroundColor = '#faf8f5';
        if (checkBox) {
          checkBox.style.backgroundColor = '#ffffff';
          checkBox.style.border = '1px solid #d7cfdf';
        }
        if (checkIcon) {
          checkIcon.style.display = 'none';
        }
      }
    });

    if (btnContinueToGoals && btnContinueHabitsText) {
      if (count === 0) {
        btnContinueToGoals.classList.add('is-disabled');
        btnContinueHabitsText.textContent = 'Escolha pelo menos 1 hábito';
      } else {
        btnContinueToGoals.classList.remove('is-disabled');
        const label = count === 1 ? '1 hábito' : `${count} hábitos`;
        btnContinueHabitsText.textContent = `Continuar com ${label}`;
      }
    }
  }

  habitCards.forEach((card) => {
    card.addEventListener('click', () => {
      const habitId = card.getAttribute('data-habit-id');
      const idx = state.selectedHabits.indexOf(habitId);

      if (idx >= 0) {
        state.selectedHabits.splice(idx, 1);
      } else {
        if (state.selectedHabits.length >= 3) {
          showToast('Você pode escolher até 3 hábitos para começar.');
          return;
        }
        state.selectedHabits.push(habitId);
      }

      if (state.selectedHabits.length > 0) {
        state.activeCommunityHabitId = state.selectedHabits[0];
        state.calendarHabitIdx = 0;
      }

      updateHabitSelectionUI();
    });
  });

  if (btnContinueToGoals) {
    btnContinueToGoals.addEventListener('click', () => {
      if (state.selectedHabits.length === 0) {
        showToast('Selecione pelo menos 1 hábito para continuar.');
        return;
      }
      goToScreen('screen-02-goals');
    });
  }

  // =========================================================================
  // Screen 02 · Suas metas (Diária, Semanal, Mensal + Recomendação Iniciantes)
  // =========================================================================
  const goalsContainer = document.getElementById('goals-cards-container');
  const btnFinishGoals = document.getElementById('btn-finish-goals');

  function renderGoalsScreen() {
    if (!goalsContainer) return;
    const habitsToRender = getActiveHabits();

    goalsContainer.innerHTML = habitsToRender
      .map((habitId) => {
        const h = HABIT_CATALOG[habitId];
        const g = state.habitGoals[habitId];
        if (!h || !g) return '';

        return `
          <div class="goal-HabitCard" data-goal-habit="${habitId}">
            <div class="goal-CardHeader">
              <div class="goal-HabitIdentity">
                <div class="goal-SymbolBox" style="background-color: ${h.todayBoxBg};">
                  <img src="${h.iconSelect}" alt="" width="22" height="22" />
                </div>
                <div>
                  <div class="goal-HabitTitle">${h.title}</div>
                  <div class="goal-HabitCategory">${h.category}</div>
                </div>
              </div>
            </div>

            <div class="goal-BeginnerBanner">
              <span class="goal-BeginnerTag">🌱 Recomendação para iniciantes</span>
              <span class="goal-BeginnerText">${h.beginnerTip}</span>
            </div>

            <div class="goal-PresetRow">
              <button type="button" class="goal-PresetBtn ${g.preset === 'iniciante' ? 'is-active' : ''}" data-preset-habit="${habitId}" data-preset-level="iniciante">
                Iniciante ★
              </button>
              <button type="button" class="goal-PresetBtn ${g.preset === 'moderado' ? 'is-active' : ''}" data-preset-habit="${habitId}" data-preset-level="moderado">
                Moderado
              </button>
              <button type="button" class="goal-PresetBtn ${g.preset === 'intenso' ? 'is-active' : ''}" data-preset-habit="${habitId}" data-preset-level="intenso">
                Intenso
              </button>
            </div>

            <div class="goal-RowsList">
              <!-- Meta Diária -->
              <div class="goal-FreqRow">
                <div class="goal-FreqInfo">
                  <span class="goal-FreqLabel">Meta Diária</span>
                  <span class="goal-FreqValue">${g.daily} ${h.dailyUnit}</span>
                </div>
                <div class="goal-Stepper">
                  <button type="button" class="goal-StepBtn" data-step-habit="${habitId}" data-step-field="daily" data-step-dir="-1" aria-label="Diminuir meta diária">−</button>
                  <button type="button" class="goal-StepBtn" data-step-habit="${habitId}" data-step-field="daily" data-step-dir="1" aria-label="Aumentar meta diária">+</button>
                </div>
              </div>

              <!-- Meta Semanal -->
              <div class="goal-FreqRow">
                <div class="goal-FreqInfo">
                  <span class="goal-FreqLabel">Meta Semanal</span>
                  <span class="goal-FreqValue">${g.weekly} ${h.weeklyUnit}</span>
                </div>
                <div class="goal-Stepper">
                  <button type="button" class="goal-StepBtn" data-step-habit="${habitId}" data-step-field="weekly" data-step-dir="-1" aria-label="Diminuir meta semanal">−</button>
                  <button type="button" class="goal-StepBtn" data-step-habit="${habitId}" data-step-field="weekly" data-step-dir="1" aria-label="Aumentar meta semanal">+</button>
                </div>
              </div>

              <!-- Meta Mensal -->
              <div class="goal-FreqRow">
                <div class="goal-FreqInfo">
                  <span class="goal-FreqLabel">Meta Mensal</span>
                  <span class="goal-FreqValue">${g.monthly} ${h.monthlyUnit}</span>
                </div>
                <div class="goal-Stepper">
                  <button type="button" class="goal-StepBtn" data-step-habit="${habitId}" data-step-field="monthly" data-step-dir="-1" aria-label="Diminuir meta mensal">−</button>
                  <button type="button" class="goal-StepBtn" data-step-habit="${habitId}" data-step-field="monthly" data-step-dir="1" aria-label="Aumentar meta mensal">+</button>
                </div>
              </div>
            </div>
          </div>
        `;
      })
      .join('');

    // Wire preset buttons
    goalsContainer.querySelectorAll('[data-preset-habit]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const habitId = btn.getAttribute('data-preset-habit');
        const level = btn.getAttribute('data-preset-level');
        const h = HABIT_CATALOG[habitId];
        if (!h || !h.presets[level]) return;

        state.habitGoals[habitId] = {
          preset: level,
          daily: h.presets[level].daily,
          weekly: h.presets[level].weekly,
          monthly: h.presets[level].monthly
        };
        renderGoalsScreen();
        syncAllDynamicScreens();
      });
    });

    // Wire stepper buttons (- / +)
    goalsContainer.querySelectorAll('[data-step-habit]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const habitId = btn.getAttribute('data-step-habit');
        const field = btn.getAttribute('data-step-field');
        const dir = Number(btn.getAttribute('data-step-dir'));
        const h = HABIT_CATALOG[habitId];
        const g = state.habitGoals[habitId];
        if (!h || !g) return;

        if (field === 'daily') {
          g.daily = Math.max(h.dailyMin, Math.min(h.dailyMax, g.daily + dir * h.dailyStep));
        } else if (field === 'weekly') {
          g.weekly = Math.max(1, Math.min(7, g.weekly + dir));
        } else if (field === 'monthly') {
          g.monthly = Math.max(4, Math.min(30, g.monthly + dir));
        }
        g.preset = 'personalizado';
        renderGoalsScreen();
        syncAllDynamicScreens();
      });
    });
  }

  if (btnFinishGoals) {
    btnFinishGoals.addEventListener('click', () => {
      syncAllDynamicScreens();
      goToScreen('screen-02');
      showToast('Suas metas foram configuradas com sucesso!');
    });
  }

  // =========================================================================
  // Sincronização Automática das Telas (Hoje, Progresso, Comunidades, Perfil)
  // =========================================================================
  function syncAllDynamicScreens() {
    renderTodayScreen();
    renderProgressScreen();
    renderCommunitiesScreen();
    renderActiveCommunityDetail();
    renderProfileScreen();
  }

  // -------------------------------------------------------------------------
  // 03 · Hoje
  // -------------------------------------------------------------------------
  function renderTodayScreen() {
    const activeHabits = getActiveHabits();
    const primary = getPrimaryHabit();

    const streakLabel = document.getElementById('today-streak-label');
    if (streakLabel) {
      streakLabel.textContent = primary.streakPhrase;
    }

    const commSub = document.getElementById('today-community-sub');
    if (commSub) {
      commSub.textContent = primary.todayEncourage;
    }

    const listContainer = document.getElementById('today-habits-list-container');
    if (listContainer) {
      const tops = [312, 394, 476];
      listContainer.innerHTML = activeHabits
        .map((habitId, idx) => {
          const h = HABIT_CATALOG[habitId];
          const g = state.habitGoals[habitId];
          const isDone = Boolean(state.todayDone[habitId]);
          const topPx = tops[idx] || 312 + idx * 82;
          const btnBg = isDone ? '#ddedaa' : '#eee7fa';
          const btnIcon = isDone ? 'assets/c1c8a.svg' : 'assets/a16a6.svg';
          const statusSuffix = isDone ? 'concluído hoje' : `meta: ${g.weekly}x/sem`;

          return `
            <div class="el today-habit-card interactive-click" data-today-habit="${habitId}" style="left: 24px; top: ${topPx}px; width: 354px; height: 72px; border-radius: 18px; background-color: #ffffff; border: 1px solid #e9e3ee; overflow: hidden;">
              <div class="el" style="left: 11px; top: 12px; width: 46px; height: 46px; border-radius: 14px; background-color: ${h.todayBoxBg};"></div>
              <div class="icon-slot" style="left: 24px; top: 24px; width: 21px; height: 21px;">
                <img src="${h.iconToday}" alt="" width="21" height="21" />
              </div>
              <p class="txt txt-nowrap fw-semibold" style="left: 70px; top: 12px; font-size: 14px; color: #292335;">${h.title}</p>
              <p class="txt txt-nowrap fw-regular" style="left: 70px; top: 38px; font-size: 11px; color: #77717f;">${g.daily} ${h.dailyUnit} · ${statusSuffix}</p>
              <div class="el" style="left: 302px; top: 17px; width: 36px; height: 36px; border-radius: 12px; background-color: ${btnBg}; overflow: hidden;">
                <div class="icon-slot" style="left: 8px; top: 8px; width: 20px; height: 20px;">
                  <img src="${btnIcon}" alt="" width="20" height="20" />
                </div>
              </div>
            </div>
          `;
        })
        .join('');

      listContainer.querySelectorAll('[data-today-habit]').forEach((card) => {
        card.addEventListener('click', () => {
          const hId = card.getAttribute('data-today-habit');
          state.todayDone[hId] = !state.todayDone[hId];
          renderTodayScreen();
          renderProgressScreen();
        });
      });
    }

    // Atualiza contador e porcentagem no card azul "Resumo do dia"
    const total = activeHabits.length;
    const doneCount = activeHabits.filter((id) => state.todayDone[id]).length;
    const pct = total > 0 ? Math.round((doneCount / total) * 100) : 0;

    const todayCountEl = document.getElementById('today-habits-count');
    const todayPctEl = document.getElementById('today-habits-pct');
    const todayMsgEl = document.getElementById('today-habits-msg');

    if (todayCountEl) {
      const noun = total === 1 ? 'hábito' : 'hábitos';
      todayCountEl.textContent = `${doneCount} de ${total} ${noun}`;
    }
    if (todayPctEl) {
      todayPctEl.textContent = `${pct}%`;
      todayPctEl.style.left = pct === 100 ? '277px' : pct === 0 ? '286px' : '281px';
    }
    if (todayMsgEl) {
      todayMsgEl.textContent =
        doneCount === total
          ? 'Parabéns! Você concluiu sua meta diária de hoje!'
          : 'Um passo de cada vez. Você está indo bem!';
    }
  }

  // -------------------------------------------------------------------------
  // 04 · Meu progresso
  // -------------------------------------------------------------------------
  let isMonthView = false;
  const periodBtn = document.getElementById('period-filter-btn');
  const periodLabel = document.getElementById('period-filter-label');

  function renderProgressScreen() {
    const activeHabits = getActiveHabits();
    if (state.calendarHabitIdx >= activeHabits.length) {
      state.calendarHabitIdx = 0;
    }
    const currentHabitId = activeHabits[state.calendarHabitIdx] || activeHabits[0];
    const h = HABIT_CATALOG[currentHabitId];
    const g = state.habitGoals[currentHabitId];
    const doneTodayCount = activeHabits.filter((id) => state.todayDone[id]).length;

    const statCheckins = document.getElementById('stat-checkins');
    const statReading = document.getElementById('stat-reading');
    const statReadingLabel = document.getElementById('stat-reading-label');
    const statGoal = document.getElementById('stat-goal');
    const statGoalLabel = document.getElementById('stat-goal-label');
    const chartTitle = document.getElementById('progress-chart-title');
    const chartSubtitle = document.getElementById('progress-chart-subtitle');
    const calTitle = document.getElementById('calendar-habit-title');
    const footerMsg = document.getElementById('progress-footer-msg');
    const barDay18 = document.getElementById('bar-day-18');

    if (statCheckins) {
      statCheckins.textContent = isMonthView ? String(38 + doneTodayCount) : String(14 + doneTodayCount);
    }
    if (statReading) {
      statReading.textContent = h.statMiddleTop;
    }
    if (statReadingLabel) {
      statReadingLabel.textContent = h.statMiddleSub;
    }
    if (statGoal) {
      const pct = isMonthView
        ? Math.min(100, Math.round(((15 + (state.todayDone[currentHabitId] ? 1 : 0)) / g.monthly) * 100))
        : Math.min(100, Math.round(((5 + (state.todayDone[currentHabitId] ? 1 : 0)) / g.weekly) * 100));
      statGoal.textContent = `${pct}%`;
    }
    if (statGoalLabel) {
      statGoalLabel.textContent = isMonthView ? `meta ${g.monthly}d/mês` : `meta ${g.weekly}d/sem`;
    }

    if (chartTitle) {
      chartTitle.textContent =
        activeHabits.length === 1 ? `${h.title} · semana` : 'Hábitos concluídos';
    }
    if (chartSubtitle) {
      chartSubtitle.textContent = `Meta diária: ${g.daily} ${h.dailyUnit}`;
    }

    if (calTitle) {
      const suffix = activeHabits.length > 1 ? ` (${state.calendarHabitIdx + 1}/${activeHabits.length})` : '';
      calTitle.textContent = `${h.title} · novembro${suffix}`;
    }

    if (footerMsg) {
      footerMsg.textContent = `${h.title}: meta de ${g.daily} ${h.dailyUnit} · ${g.weekly}x/sem · ${g.monthly}x/mês.`;
    }

    if (barDay18) {
      const barLevel = Math.max(1, doneTodayCount);
      const heights = { 1: 31, 2: 62, 3: 93 };
      const tops = { 1: 142, 2: 111, 3: 80 };
      barDay18.style.height = `${heights[barLevel] || 62}px`;
      barDay18.style.top = `${tops[barLevel] || 111}px`;
    }
  }

  if (periodBtn && periodLabel) {
    periodBtn.addEventListener('click', () => {
      isMonthView = !isMonthView;
      periodLabel.textContent = isMonthView ? 'Mês' : 'Semana';
      renderProgressScreen();
    });
  }

  const btnPrevCal = document.getElementById('btn-prev-habit-cal');
  const btnNextCal = document.getElementById('btn-next-habit-cal');
  function cycleCalendarHabit(dir) {
    const active = getActiveHabits();
    if (active.length <= 1) {
      showToast(`Exibindo calendário de ${HABIT_CATALOG[active[0]].title}`);
      return;
    }
    state.calendarHabitIdx = (state.calendarHabitIdx + dir + active.length) % active.length;
    renderProgressScreen();
  }
  if (btnPrevCal) btnPrevCal.addEventListener('click', () => cycleCalendarHabit(-1));
  if (btnNextCal) btnNextCal.addEventListener('click', () => cycleCalendarHabit(1));

  // -------------------------------------------------------------------------
  // 05 · Comunidades
  // -------------------------------------------------------------------------
  let currentCommFilter = 'descobrir';

  function renderCommunitiesScreen() {
    const activeHabits = getActiveHabits();
    const primary = getPrimaryHabit();

    const featuredTitle = document.getElementById('comm-featured-title');
    const featuredSub = document.getElementById('comm-featured-sub');
    if (featuredTitle) {
      featuredTitle.innerHTML = `<p>${primary.featuredChallengeLines[0]}</p><p>${primary.featuredChallengeLines[1]}</p>`;
    }
    if (featuredSub) {
      featuredSub.textContent = primary.featuredChallengeSub;
    }

    // Ordena comunidades: primeiro as dos hábitos escolhidos pelo usuário
    const allHabitIds = Object.keys(HABIT_CATALOG);
    const orderedIds = [
      ...activeHabits,
      ...allHabitIds.filter((id) => !activeHabits.includes(id))
    ];

    const joinedSet = new Set([...activeHabits, ...state.extraJoinedCommunities]);
    const myCountTab = document.getElementById('comm-my-count-tab');
    if (myCountTab) {
      myCountTab.textContent = `Minhas (${joinedSet.size})`;
    }

    const searchInput = document.getElementById('community-search-input');
    const query = searchInput ? searchInput.value.trim().toLowerCase() : '';

    let filteredIds = orderedIds.filter((id) => {
      if (currentCommFilter === 'minhas' && !joinedSet.has(id)) return false;
      if (query) {
        const h = HABIT_CATALOG[id];
        const haystack = `${h.title} ${h.community.name} ${h.category}`.toLowerCase();
        return haystack.includes(query);
      }
      return true;
    });

    // Exibe os 3 primeiros cards no espaço do frame (priorizando os escolhidos)
    const visibleIds = filteredIds.slice(0, 3);
    const container = document.getElementById('communities-list-container');
    if (!container) return;

    const tops = [306, 416, 526];
    container.innerHTML = visibleIds
      .map((habitId, idx) => {
        const h = HABIT_CATALOG[habitId];
        const isJoined = joinedSet.has(habitId);
        const topPx = tops[idx];
        const pillBg = isJoined ? '#eee7fa' : '#faf8f5';
        const pillColor = isJoined ? '#8fd2fa' : '#77717f';
        const pillText = isJoined ? 'Participando' : 'Conhecer';
        const pillWidth = isJoined ? '109px' : '90px';

        return `
          <div class="el community-item-card interactive-click" data-open-comm-habit="${habitId}" style="left: 24px; top: ${topPx}px; width: 354px; height: 98px; border-radius: 18px; background-color: #ffffff; border: 1px solid #e9e3ee; overflow: hidden;">
            <div class="el" style="left: 11px; top: 13px; width: 60px; height: 66px; border-radius: 16px; background-color: ${h.commCardBg};"></div>
            <p class="txt fw-semibold" style="left: 84px; top: 11px; width: 250px; font-size: 14px; color: #292335;">${h.community.name}</p>
            <p class="txt txt-nowrap fw-regular" style="left: 84px; top: 35px; font-size: 10px; color: #77717f;">${h.community.membersText}</p>
            <div class="el" style="left: 84px; top: 59px; width: ${pillWidth}; height: 28px; border-radius: 14px; background-color: ${pillBg};"></div>
            <p class="txt txt-nowrap fw-semibold" style="left: 94px; top: 64px; font-size: 11px; color: ${pillColor};">${pillText}</p>
            <div class="icon-slot" style="left: 318px; top: 65px; width: 16px; height: 16px;">
              <img src="assets/5c2f5.svg" alt="" width="16" height="16" />
            </div>
            <div class="icon-slot" style="left: 28px; top: 32px; width: 28px; height: 28px;">
              <img src="${h.iconCommCard}" alt="" width="28" height="28" />
            </div>
          </div>
        `;
      })
      .join('');

    container.querySelectorAll('[data-open-comm-habit]').forEach((card) => {
      card.addEventListener('click', () => {
        const habitId = card.getAttribute('data-open-comm-habit');
        state.activeCommunityHabitId = habitId;
        state.extraJoinedCommunities.add(habitId);
        goToScreen('screen-05');
      });
    });
  }

  const searchInputEl = document.getElementById('community-search-input');
  if (searchInputEl) {
    searchInputEl.addEventListener('input', renderCommunitiesScreen);
  }

  const filterPills = document.querySelectorAll('.comm-filter-pill');
  const filterTexts = document.querySelectorAll('.comm-filter-text');
  filterPills.forEach((pill) => {
    pill.addEventListener('click', () => {
      currentCommFilter = pill.getAttribute('data-filter') || 'descobrir';
      filterPills.forEach((p) => {
        p.style.backgroundColor =
          p.getAttribute('data-filter') === currentCommFilter ? '#8fd2fa' : '#ffffff';
      });
      filterTexts.forEach((t) => {
        t.style.color =
          t.getAttribute('data-filter') === currentCommFilter ? '#ffffff' : '#77717f';
      });
      renderCommunitiesScreen();
    });
  });

  // -------------------------------------------------------------------------
  // 06 · Comunidade (detalhe dinâmico conforme hábito selecionado)
  // -------------------------------------------------------------------------
  function renderActiveCommunityDetail() {
    const activeHabits = getActiveHabits();
    const habitId = state.activeCommunityHabitId || activeHabits[0];
    const h = HABIT_CATALOG[habitId] || getPrimaryHabit();
    const c = h.community;

    const headerTitle = document.getElementById('active-comm-header-title');
    const bannerTitle = document.getElementById('active-comm-banner-title');
    const bannerIcon = document.getElementById('active-comm-banner-icon');
    const bannerMembers = document.getElementById('active-comm-banner-members');
    const challengeTitle = document.getElementById('active-comm-challenge-title');
    const challengeSub = document.getElementById('challenge-participants-txt');
    const postBody = document.getElementById('active-comm-post-body');
    const latestComment = document.getElementById('latest-comment-text');

    if (headerTitle) headerTitle.textContent = `Comunidade · ${h.title}`;
    if (bannerTitle) {
      bannerTitle.innerHTML = `<p>${c.bannerLines[0]}</p><p>${c.bannerLines[1]}</p>`;
    }
    if (bannerIcon) bannerIcon.setAttribute('src', h.iconCommBanner);
    if (bannerMembers) bannerMembers.textContent = c.publicText;
    if (challengeTitle) challengeTitle.textContent = c.challengeTitle;
    if (challengeSub) challengeSub.textContent = c.challengeSub;
    if (postBody) {
      postBody.innerHTML = c.postLines.map((line) => `<p>${line}</p>`).join('');
    }
    if (latestComment) {
      latestComment.textContent = c.commentText;
    }
  }

  // Interações de desafio, curtir e comentar na tela 06 · Comunidade
  const btnJoinChallengeBg = document.getElementById('btn-join-challenge-bg');
  const btnJoinChallengeTxt = document.getElementById('btn-join-challenge-txt');
  let joinedChallenge = false;

  if (btnJoinChallengeBg && btnJoinChallengeTxt) {
    btnJoinChallengeBg.addEventListener('click', () => {
      joinedChallenge = !joinedChallenge;
      if (joinedChallenge) {
        btnJoinChallengeBg.style.backgroundColor = '#415229';
        btnJoinChallengeTxt.style.color = '#ffffff';
        btnJoinChallengeTxt.textContent = 'Participando';
        btnJoinChallengeTxt.style.left = '256px';
        showToast('Você entrou no desafio coletivo da comunidade!');
      } else {
        btnJoinChallengeBg.style.backgroundColor = '#ffffff';
        btnJoinChallengeTxt.style.color = '#415229';
        btnJoinChallengeTxt.textContent = 'Participar';
        btnJoinChallengeTxt.style.left = '261px';
      }
    });
  }

  const btnLikePost = document.getElementById('btn-like-post');
  const likeCountPost = document.getElementById('like-count-post');
  let postLiked = false;
  function toggleLike() {
    postLiked = !postLiked;
    if (likeCountPost) {
      likeCountPost.textContent = postLiked ? '25' : '24';
      likeCountPost.style.color = postLiked ? '#e46358' : '#8fd2fa';
    }
  }
  if (btnLikePost) btnLikePost.addEventListener('click', toggleLike);
  if (likeCountPost) likeCountPost.addEventListener('click', toggleLike);

  const inputNewComment = document.getElementById('input-new-comment');
  const btnSubmitComment = document.getElementById('btn-submit-comment');
  const latestCommentText = document.getElementById('latest-comment-text');
  const commentCountPost = document.getElementById('comment-count-post');
  const btnFocusComment = document.getElementById('btn-focus-comment');
  let commentCount = 8;

  if (btnFocusComment && inputNewComment) {
    btnFocusComment.addEventListener('click', () => inputNewComment.focus());
  }

  function submitComment() {
    if (!inputNewComment) return;
    const val = inputNewComment.value.trim();
    if (!val) {
      inputNewComment.focus();
      return;
    }
    if (latestCommentText) {
      latestCommentText.textContent = val;
    }
    commentCount++;
    if (commentCountPost) {
      commentCountPost.textContent = `${commentCount} comentários`;
    }
    inputNewComment.value = '';
    showToast('Incentivo publicado no mural!');
  }

  if (btnSubmitComment) btnSubmitComment.addEventListener('click', submitComment);
  if (inputNewComment) {
    inputNewComment.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') submitComment();
    });
  }

  // -------------------------------------------------------------------------
  // 07 · Meu perfil
  // -------------------------------------------------------------------------
  function renderProfileScreen() {
    const activeHabits = getActiveHabits();
    const joinedSet = new Set([...activeHabits, ...state.extraJoinedCommunities]);

    const profileHabitsCount = document.getElementById('profile-habits-count');
    const profileCommCount = document.getElementById('profile-comm-count');
    const profileHabitsBox = document.getElementById('profile-habits-box');

    if (profileHabitsCount) {
      profileHabitsCount.textContent = String(activeHabits.length);
    }
    if (profileCommCount) {
      profileCommCount.textContent = String(joinedSet.size);
    }

    if (profileHabitsBox) {
      const rowTops = [15, 58, 101];
      profileHabitsBox.innerHTML = activeHabits
        .map((habitId, idx) => {
          const h = HABIT_CATALOG[habitId];
          const g = state.habitGoals[habitId];
          const topPx = rowTops[idx] || 15 + idx * 43;

          return `
            <div class="icon-slot" style="left: 15px; top: ${topPx}px; width: 20px; height: 20px;">
              <img src="${h.iconProfile}" alt="" width="20" height="20" />
            </div>
            <p class="txt txt-nowrap fw-medium" style="left: 48px; top: ${topPx + 1}px; font-size: 12px; color: #292335;">${h.title}</p>
            <p class="txt txt-nowrap fw-regular" style="left: 185px; top: ${topPx + 3}px; font-size: 10px; color: #77717f;">${g.daily} ${h.dailyUnit} · ${g.weekly}x/sem · ${g.monthly}x/mês</p>
          `;
        })
        .join('');
    }
  }

  const toggleReminders = document.getElementById('toggle-reminders');
  const reminderTimeLabel = document.getElementById('reminder-time-label');
  const btnEditReminder = document.getElementById('btn-edit-reminder');
  const reminderTimes = ['20:30', '21:00', '21:30', '22:00', '19:30'];
  let reminderIdx = 0;

  if (toggleReminders) {
    toggleReminders.addEventListener('click', () => {
      const isOff = toggleReminders.classList.toggle('is-off');
      toggleReminders.setAttribute('aria-checked', String(!isOff));
      if (reminderTimeLabel) {
        reminderTimeLabel.textContent = isOff
          ? 'Lembretes pausados no momento'
          : `Todos os dias, às ${reminderTimes[reminderIdx]}`;
      }
    });
  }

  if (btnEditReminder && reminderTimeLabel) {
    btnEditReminder.addEventListener('click', () => {
      reminderIdx = (reminderIdx + 1) % reminderTimes.length;
      if (toggleReminders && toggleReminders.classList.contains('is-off')) {
        toggleReminders.classList.remove('is-off');
        toggleReminders.setAttribute('aria-checked', 'true');
      }
      reminderTimeLabel.textContent = `Todos os dias, às ${reminderTimes[reminderIdx]}`;
      showToast(`Horário atualizado para ${reminderTimes[reminderIdx]}`);
    });
  }

  // Inicialização
  updateHabitSelectionUI();
  renderGoalsScreen();
  syncAllDynamicScreens();
})();
