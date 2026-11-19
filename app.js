(function () {
  'use strict';

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
    }, 2400);
  }

  function goToScreen(screenId) {
    if (!screenId) return;
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

  // Top bar tabs
  tabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-target-screen');
      goToScreen(target);
    });
  });

  // Mode toggle (Single Interactive vs All Screens Canvas)
  if (btnModeSingle && btnModeAll) {
    btnModeSingle.addEventListener('click', () => {
      stage.classList.remove('mode-all');
      stage.classList.add('mode-single');
      btnModeSingle.classList.add('is-active');
      btnModeAll.classList.remove('is-active');
    });

    btnModeAll.addEventListener('click', () => {
      stage.classList.remove('mode-single');
      stage.classList.add('mode-all');
      btnModeAll.classList.add('is-active');
      btnModeSingle.classList.remove('is-active');
    });
  }

  // In-prototype navigation links
  document.querySelectorAll('[data-goto-screen]').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      const target = el.getAttribute('data-goto-screen');
      goToScreen(target);
    });
  });

  // Generic toast triggers
  document.querySelectorAll('[data-toast]').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      showToast(el.getAttribute('data-toast'));
    });
  });

  // =========================================================================
  // Screen 00: Criar perfil
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
  const labelTerms = document.getElementById('label-terms');
  function toggleTerms() {
    if (!checkboxTerms) return;
    const checked = checkboxTerms.classList.toggle('is-checked');
    checkboxTerms.setAttribute('aria-checked', String(checked));
    checkboxTerms.innerHTML = checked
      ? '<img src="assets/1d291.svg" alt="" width="14" height="14" style="display:block;" />'
      : '';
  }
  if (checkboxTerms) checkboxTerms.addEventListener('click', toggleTerms);
  if (labelTerms) labelTerms.addEventListener('click', toggleTerms);

  // =========================================================================
  // Screen 01: Escolha de hábitos
  // =========================================================================
  const habitCards = document.querySelectorAll('.habit-select-card');
  const btnContinueHabitsText = document.getElementById('btn-continue-habits-text');
  const profileHabitsCount = document.getElementById('profile-habits-count');

  function updateHabitSelectionUI() {
    let selectedCount = 0;
    habitCards.forEach((card) => {
      const isSelected = card.classList.contains('is-selected');
      if (isSelected) selectedCount++;

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
          checkIcon.style.left = '3px';
          checkIcon.style.top = '3px';
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

    if (btnContinueHabitsText) {
      const label = selectedCount === 1 ? '1 hábito' : `${selectedCount} hábitos`;
      btnContinueHabitsText.textContent = `Continuar com ${label}`;
    }
    if (profileHabitsCount) {
      profileHabitsCount.textContent = String(selectedCount);
    }
  }

  habitCards.forEach((card) => {
    card.addEventListener('click', () => {
      const currentlySelected = document.querySelectorAll('.habit-select-card.is-selected').length;
      const isSelected = card.classList.contains('is-selected');

      if (!isSelected && currentlySelected >= 3) {
        showToast('Escolha até 3 hábitos para começar.');
        return;
      }
      if (isSelected && currentlySelected <= 1) {
        showToast('Mantenha pelo menos 1 hábito selecionado.');
        return;
      }

      card.classList.toggle('is-selected');
      updateHabitSelectionUI();
    });
  });

  // =========================================================================
  // Screen 02: Hoje (check-in de hábitos)
  // =========================================================================
  const todayHabitCards = document.querySelectorAll('.today-habit-card');
  const todayCountEl = document.getElementById('today-habits-count');
  const todayPctEl = document.getElementById('today-habits-pct');
  const todayMsgEl = document.getElementById('today-habits-msg');
  const barDay18 = document.getElementById('bar-day-18');
  const statCheckins = document.getElementById('stat-checkins');
  const statGoal = document.getElementById('stat-goal');

  function updateTodayProgress() {
    const total = todayHabitCards.length;
    let doneCount = 0;

    todayHabitCards.forEach((card) => {
      const isDone = card.getAttribute('data-done') === 'true';
      if (isDone) doneCount++;

      const btn = card.querySelector('.today-checkin-btn');
      const iconImg = card.querySelector('.checkin-icon-img');
      const subTxt = card.querySelector('.today-habit-sub');

      if (btn && iconImg) {
        if (isDone) {
          btn.style.backgroundColor = '#ddedaa';
          iconImg.setAttribute('src', 'assets/c1c8a.svg');
          if (subTxt) subTxt.textContent = '20 min · concluído hoje';
        } else {
          btn.style.backgroundColor = '#eee7fa';
          iconImg.setAttribute('src', 'assets/a16a6.svg');
          if (subTxt) subTxt.textContent = '20 min · ainda dá tempo';
        }
      }
    });

    const pct = Math.round((doneCount / total) * 100);
    if (todayCountEl) todayCountEl.textContent = `${doneCount} de ${total} hábitos`;
    if (todayPctEl) {
      todayPctEl.textContent = `${pct}%`;
      todayPctEl.style.left = pct === 100 ? '277px' : '281px';
    }
    if (todayMsgEl) {
      todayMsgEl.textContent =
        doneCount === total
          ? 'Parabéns! Você concluiu todos os hábitos de hoje!'
          : 'Um passo de cada vez. Você está indo bem!';
    }

    // Sync bar chart for Day 18 on Screen 03
    if (barDay18) {
      const heights = { 0: 8, 1: 31, 2: 62, 3: 93 };
      const tops = { 0: 165, 1: 142, 2: 111, 3: 80 };
      barDay18.style.height = `${heights[doneCount] ?? 62}px`;
      barDay18.style.top = `${tops[doneCount] ?? 111}px`;
    }
    if (statCheckins) {
      statCheckins.textContent = String(14 + doneCount);
    }
    if (statGoal) {
      const weekTotal = 14 + doneCount;
      statGoal.textContent = `${Math.round((weekTotal / 21) * 100)}%`;
    }
  }

  todayHabitCards.forEach((card) => {
    card.addEventListener('click', () => {
      const isDone = card.getAttribute('data-done') === 'true';
      card.setAttribute('data-done', String(!isDone));
      updateTodayProgress();
    });
  });

  // =========================================================================
  // Screen 03: Meu progresso (filtro Semana / Mês)
  // =========================================================================
  const periodBtn = document.getElementById('period-filter-btn');
  const periodLabel = document.getElementById('period-filter-label');
  let isMonthView = false;
  if (periodBtn && periodLabel) {
    periodBtn.addEventListener('click', () => {
      isMonthView = !isMonthView;
      periodLabel.textContent = isMonthView ? 'Mês' : 'Semana';
      if (statCheckins) statCheckins.textContent = isMonthView ? '42' : '16';
      if (statGoal) statGoal.textContent = isMonthView ? '81%' : '76%';
    });
  }

  // =========================================================================
  // Screen 04: Comunidades (busca, abas e participação)
  // =========================================================================
  const searchInput = document.getElementById('community-search-input');
  const commCards = document.querySelectorAll('.community-item-card');

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const q = searchInput.value.trim().toLowerCase();
      commCards.forEach((card) => {
        const keywords = (card.getAttribute('data-comm-name') || '').toLowerCase();
        card.style.opacity = !q || keywords.includes(q) ? '1' : '0.3';
      });
    });
  }

  const filterPills = document.querySelectorAll('.comm-filter-pill');
  const filterTexts = document.querySelectorAll('.comm-filter-text');
  filterPills.forEach((pill) => {
    pill.addEventListener('click', () => {
      const selected = pill.getAttribute('data-filter');
      filterPills.forEach((p) => {
        p.style.backgroundColor = p.getAttribute('data-filter') === selected ? '#8fd2fa' : '#ffffff';
      });
      filterTexts.forEach((t) => {
        t.style.color = t.getAttribute('data-filter') === selected ? '#ffffff' : '#77717f';
      });
    });
  });

  // Botões "Conhecer" nas comunidades 2 e 3
  document.querySelectorAll('.community-item-card').forEach((card) => {
    const joinBg = card.querySelector('.comm-join-bg');
    const joinTxt = card.querySelector('.comm-join-txt');
    if (joinBg && joinTxt) {
      card.addEventListener('click', () => {
        const joined = card.classList.toggle('is-joined');
        if (joined) {
          joinBg.style.backgroundColor = '#eee7fa';
          joinBg.style.width = '109px';
          joinTxt.style.color = '#8fd2fa';
          joinTxt.textContent = 'Participando';
          showToast(`Você entrou em "${card.getAttribute('data-name')}"!`);
        } else {
          joinBg.style.backgroundColor = '#faf8f5';
          joinBg.style.width = '90px';
          joinTxt.style.color = '#77717f';
          joinTxt.textContent = 'Conhecer';
        }
      });
    }
  });

  // =========================================================================
  // Screen 05: Comunidade de leitura (Desafio, Curtir e Comentar)
  // =========================================================================
  const btnJoinChallengeBg = document.getElementById('btn-join-challenge-bg');
  const btnJoinChallengeTxt = document.getElementById('btn-join-challenge-txt');
  const challengeParticipantsTxt = document.getElementById('challenge-participants-txt');
  let joinedChallenge = false;

  if (btnJoinChallengeBg && btnJoinChallengeTxt) {
    btnJoinChallengeBg.addEventListener('click', () => {
      joinedChallenge = !joinedChallenge;
      if (joinedChallenge) {
        btnJoinChallengeBg.style.backgroundColor = '#415229';
        btnJoinChallengeTxt.style.color = '#ffffff';
        btnJoinChallengeTxt.textContent = 'Participando';
        btnJoinChallengeTxt.style.left = '256px';
        if (challengeParticipantsTxt) {
          challengeParticipantsTxt.textContent = '129 participantes · começa segunda';
        }
        showToast('Você entrou no desafio "7 noites, 7 páginas"!');
      } else {
        btnJoinChallengeBg.style.backgroundColor = '#ffffff';
        btnJoinChallengeTxt.style.color = '#415229';
        btnJoinChallengeTxt.textContent = 'Participar';
        btnJoinChallengeTxt.style.left = '261px';
        if (challengeParticipantsTxt) {
          challengeParticipantsTxt.textContent = '128 participantes · começa segunda';
        }
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

  // =========================================================================
  // Screen 06: Meu perfil (Lembretes gentis)
  // =========================================================================
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
})();
