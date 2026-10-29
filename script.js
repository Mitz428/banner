function hexToRgba(hex, alphaPercent) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alphaPercent / 100})`;
}

function updateHeroDemo() {
  const text = document.getElementById('hero-input-text').value;
  const layout = document.getElementById('hero-input-layout').value;
  const bg = document.getElementById('hero-input-bg').value;
  const opacity = document.getElementById('hero-input-opacity').value;
  const color = document.getElementById('hero-input-color').value;
  const size = document.getElementById('hero-input-size').value;
  const radius = document.getElementById('hero-input-radius').value;

  document.getElementById('hero-label-bg').textContent = bg.toUpperCase();
  document.getElementById('hero-label-opacity').textContent = opacity;
  document.getElementById('hero-label-color').textContent = color.toUpperCase();
  document.getElementById('hero-label-size').textContent = size;
  document.getElementById('hero-label-radius').textContent = radius;

  const targets = [
    {
      box: document.getElementById('interactive-banner'),
      icon: document.getElementById('interactive-icon'),
      txt: document.getElementById('interactive-text')
    },
    {
      box: document.getElementById('page-live-banner'),
      icon: document.getElementById('live-icon'),
      txt: document.getElementById('live-text')
    }
  ];

  targets.forEach(t => {
    t.box.style.backgroundColor = hexToRgba(bg, opacity);
    t.box.style.color = color;
    t.box.style.borderRadius = radius + 'px';
    t.box.style.boxShadow = parseInt(opacity, 10) === 0 ? 'none' : '0 8px 24px rgba(0,0,0,0.15)';
    t.txt.textContent = text;
    t.txt.style.fontSize = size + 'px';

    if (layout === 'row') {
      t.box.style.flexDirection = 'row';
      t.icon.style.display = 'flex';
      t.txt.style.display = 'block';
    } else if (layout === 'row-reverse') {
      t.box.style.flexDirection = 'row-reverse';
      t.icon.style.display = 'flex';
      t.txt.style.display = 'block';
    } else if (layout === 'column') {
      t.box.style.flexDirection = 'column';
      t.icon.style.display = 'flex';
      t.txt.style.display = 'block';
    } else if (layout === 'image') {
      t.icon.style.display = 'flex';
      t.txt.style.display = 'none';
    } else if (layout === 'text') {
      t.icon.style.display = 'none';
      t.txt.style.display = 'block';
    }
  });
}

function selectLayoutMenu(itemEl, layoutVal) {
  document.querySelectorAll('.dark-dropdown-item').forEach(el => {
    el.classList.remove('active');
    el.textContent = ' ' + el.textContent.replace('✓', '').trim();
  });
  itemEl.classList.add('active');
  itemEl.textContent = '✓ ' + itemEl.textContent.trim();

  document.getElementById('hero-input-layout').value = layoutVal;
  updateHeroDemo();
}

