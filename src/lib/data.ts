
import type { Curriculum } from './types';

export const curriculum: Curriculum = {
  levels: [
    {
      id: 'a0',
      title: 'Уровень 0: Основы Грамматики',
      description: 'Фундаментальные правила немецкого языка. Здесь собраны ключевые грамматические темы, которые являются каркасом для построения правильных предложений и понимания языка.',
      topics: [
        {
          id: 'word-order',
          title: 'Порядок слов в предложении',
          explanation: `
            <h2 class="font-headline text-2xl font-bold mb-4">1. Простое повествовательное предложение</h2>
            <p class="mb-4">В стандартном немецком предложении спрягаемый (изменяемый) глагол всегда стоит на <strong>втором месте</strong>. Подлежащее (кто/что выполняет действие) может стоять на первом или на третьем месте.</p>
            <ul class="list-disc list-inside space-y-2 mb-6 bg-muted p-4 rounded-lg">
              <li>Прямой порядок слов: <code class="bg-card p-1 rounded">Подлежащее (1) + Глагол (2) + Остальные части предложения.</code></li>
              <li><em>Пример: <strong class="text-primary">Ich</strong> <strong class="text-accent">lerne</strong> heute Deutsch.</em> (Я учу сегодня немецкий.)</li>
              <li class="mt-2">Обратный порядок слов (когда на первое место выносится второстепенный член): <code class="bg-card p-1 rounded">Второстепенный член (1) + Глагол (2) + Подлежащее (3) + ...</code></li>
              <li><em>Пример: <strong class="text-primary">Heute</strong> <strong class="text-accent">lerne</strong> <strong class="text-primary">ich</strong> Deutsch.</em> (Сегодня я учу немецкий.)</li>
            </ul>

            <h2 class="font-headline text-2xl font-bold mb-4">2. Вопросительное предложение</h2>
            <p class="mb-4">Существует два типа вопросов:</p>
            <ul class="list-disc list-inside space-y-2 mb-6">
              <li><strong>Вопрос без вопросительного слова (ответ Да/Нет):</strong> Глагол стоит на <strong>первом месте</strong>.</li>
              <li><em>Пример: <strong class="text-accent">Lernst</strong> du Deutsch?</em> (Ты учишь немецкий?)</li>
              <li class="mt-2"><strong>Вопрос с вопросительным словом (W-Frage):</strong> Вопросительное слово стоит на <strong>первом месте</strong>, а глагол — на <strong>втором</strong>.</li>
               <li><em>Пример: <strong class="text-primary">Was</strong> <strong class="text-accent">lernst</strong> du?</em> (Что ты учишь?)</li>
            </ul>

            <h2 class="font-headline text-2xl font-bold mb-4">3. Придаточное предложение</h2>
            <p class="mb-4">В придаточных предложениях, которые вводятся союзами (dass, weil, wenn и т.д.), спрягаемый глагол уходит в <strong>самый конец</strong>.</p>
            <div class="bg-muted p-3 rounded-lg italic my-4">Ich bleibe zu Hause, <strong class="text-primary">weil</strong> ich Deutsch <strong class="text-accent">lerne</strong>. (Я остаюсь дома, потому что я учу немецкий.)</div>
          `,
          vocabulary: [],
          exercises: []
        },
        {
          id: 'faelle',
          title: 'Падежи (Die Fälle)',
          explanation: `
            <p class="mb-4">Падеж показывает, какую роль существительное играет в предложении. В немецком языке четыре падежа.</p>
            <h2 class="font-headline text-2xl font-bold mb-4">1. Nominativ (Именительный падеж)</h2>
            <p class="mb-4">Отвечает на вопросы <strong>Wer?</strong> (кто?) / <strong>Was?</strong> (что?). Обозначает подлежащее — того, кто совершает действие. Это начальная форма слова.</p>
            <div class="bg-muted p-3 rounded-lg my-4"><em><strong class="text-primary">Der Lehrer</strong> erklärt die Regel.</em> (Кто объясняет? — Учитель.)</div>

            <h2 class="font-headline text-2xl font-bold mb-4">2. Akkusativ (Винительный падеж)</h2>
            <p class="mb-4">Отвечает на вопросы <strong>Wen?</strong> (кого?) / <strong>Was?</strong> (что?). Обозначает прямой объект, на который направлено действие. Большинство глаголов требуют Akkusativ (sehen, lesen, haben, kaufen...).</p>
            <p class="mb-4"><strong>Важнейшее правило:</strong> в Akkusativ меняется только артикль мужского рода: <strong>der → den</strong>, <strong>ein → einen</strong>.</p>
            <div class="bg-muted p-3 rounded-lg my-4"><em>Ich sehe <strong class="text-accent">den Lehrer</strong>.</em> (Я вижу кого? — Учителя.)</div>

            <h2 class="font-headline text-2xl font-bold mb-4">3. Dativ (Дательный падеж)</h2>
            <p class="mb-4">Отвечает на вопрос <strong>Wem?</strong> (кому?). Обозначает косвенный объект (адресата действия). Используется с глаголами типа geben (давать), helfen (помогать), danken (благодарить) и многими предлогами.</p>
            <p class="mb-4">Изменение артиклей: der → <strong>dem</strong>, die → <strong>der</strong>, das → <strong>dem</strong>, die (мн.ч.) → <strong>den (+n)</strong>.</p>
            <div class="bg-muted p-3 rounded-lg my-4"><em>Ich gebe <strong class="text-accent">dem Lehrer</strong> das Buch.</em> (Я даю книгу кому? — Учителю.)</div>
            
            <h2 class="font-headline text-2xl font-bold mb-4">4. Genitiv (Родительный падеж)</h2>
            <p class="mb-4">Отвечает на вопрос <strong>Wessen?</strong> (чей?). Обозначает принадлежность. В разговорной речи часто заменяется конструкцией <strong>von + Dativ</strong>.</p>
            <div class="bg-muted p-3 rounded-lg my-4"><em>Das ist das Buch <strong class="text-accent">des Lehrers</strong>.</em> (Это книга чья? — Учителя.)</div>
          `,
          vocabulary: [],
          exercises: []
        },
        {
          id: 'artikel',
          title: 'Артикли',
          explanation: `
            <p class="mb-4">Артикль — это короткое слово перед существительным, которое указывает на его род, число и падеж.</p>
            <h2 class="font-headline text-2xl font-bold mb-4">1. Определенный артикль (Bestimmter Artikel)</h2>
            <p class="mb-4">Используется, когда речь идет о конкретном, уже известном или единственном в своем роде предмете. Аналог английского 'the'.</p>
            <ul class="list-disc list-inside space-y-2 mb-6 bg-muted p-4 rounded-lg">
              <li>Мужской род: <strong>der</strong> Mann (этот конкретный мужчина)</li>
              <li>Женский род: <strong>die</strong> Frau (эта конкретная женщина)</li>
              <li>Средний род: <strong>das</strong> Kind (этот конкретный ребенок)</li>
              <li>Множественное число: <strong>die</strong> Leute (эти конкретные люди)</li>
            </ul>

            <h2 class="font-headline text-2xl font-bold mb-4">2. Неопределенный артикль (Unbestimmter Artikel)</h2>
            <p class="mb-4">Используется, когда речь идет о каком-то одном, неопределенном предмете из ряда подобных, или когда предмет упоминается впервые. Аналог английского 'a/an'.</p>
            <ul class="list-disc list-inside space-y-2 mb-6 bg-muted p-4 rounded-lg">
              <li>Мужской род: <strong>ein</strong> Mann (какой-то мужчина)</li>
              <li>Женский род: <strong>eine</strong> Frau (какая-то женщина)</li>
              <li>Средний род: <strong>ein</strong> Kind (какой-то ребенок)</li>
              <li><strong>Во множественном числе неопределенный артикль отсутствует!</strong></li>
            </ul>
            
            <h2 class="font-headline text-2xl font-bold mb-4">3. Нулевой артикль</h2>
            <p class="mb-4">Артикль не используется:</p>
             <ul class="list-disc list-inside space-y-2 mb-6">
              <li>Перед именами, названиями городов и большинства стран (без прилагательного): <em>Ich wohne in <strong>Berlin</strong>.</em></li>
              <li>Перед названиями профессий и национальностей в составе сказуемого: <em>Er ist <strong>Arzt</strong>.</em></li>
              <li>Перед веществами и материалами в неопределенном количестве: <em>Ich trinke <strong>Kaffee</strong>.</em></li>
              <li>Во множественном числе, когда в единственном стоял бы неопределенный артикль: <em>Ich sehe <strong>Äpfel</strong>.</em> (Я вижу яблоки.) ср. <em>Ich sehe <strong>einen Apfel</strong>.</em></li>
            </ul>
          `,
          vocabulary: [],
          exercises: []
        },
        {
          id: 'verben-und-zeiten',
          title: 'Глаголы и времена',
          explanation: `
            <h2 class="font-headline text-2xl font-bold mb-4">1. Präsens (Настоящее время)</h2>
            <p class="mb-4">Самое употребительное время. Описывает действия в настоящем, а также запланированные действия в будущем. Глагол спрягается (изменяется по лицам и числам) и стоит на 2-м месте в предложении.</p>
            <div class="bg-muted p-3 rounded-lg my-4"><em>Ich <strong class="text-accent">lerne</strong> Deutsch. Er <strong class="text-accent">lernt</strong> Deutsch.</em></div>

            <h2 class="font-headline text-2xl font-bold mb-4">2. Perfekt (Прошедшее разговорное время)</h2>
            <p class="mb-4">Основное время для обозначения прошлого в устной речи. Образуется с помощью вспомогательного глагола <strong class="text-primary">haben</strong> или <strong class="text-primary">sein</strong> (на 2-м месте) и <strong class="text-accent">Partizip II</strong> (причастия) в конце.</p>
            <ul class="list-disc list-inside space-y-2 mb-6 bg-muted p-4 rounded-lg">
              <li>С <strong class="text-primary">sein</strong>: глаголы движения и смены состояния. <em>Ich <strong class="text-primary">bin</strong> gestern ins Kino <strong class="text-accent">gegangen</strong>.</em></li>
              <li>С <strong class="text-primary">haben</strong>: все остальные глаголы. <em>Ich <strong class="text-primary">habe</strong> ein Buch <strong class="text-accent">gelesen</strong>.</em></li>
            </ul>

            <h2 class="font-headline text-2xl font-bold mb-4">3. Präteritum (Прошедшее повествовательное время)</h2>
            <p class="mb-4">Используется в письменной речи (книги, рассказы, новости). Для глаголов <strong class="text-primary">sein</strong>, <strong class="text-primary">haben</strong> и модальных глаголов используется и в устной речи вместо Perfekt.</p>
            <div class="bg-muted p-3 rounded-lg my-4"><em>Ich <strong class="text-accent">war</strong> gestern zu Hause. Ich <strong class="text-accent">hatte</strong> keine Zeit.</em></div>

             <h2 class="font-headline text-2xl font-bold mb-4">4. Futur I (Будущее время)</h2>
            <p class="mb-4">Выражает намерение или предположение о будущем. Образуется с помощью вспомогательного глагола <strong class="text-primary">werden</strong> (на 2-м месте) и инфинитива основного глагола в конце.</p>
            <div class="bg-muted p-3 rounded-lg my-4"><em>Ich <strong class="text-primary">werde</strong> morgen meine Oma <strong class="text-accent">besuchen</strong>.</em> (Я завтра навещу бабушку.)</div>
          `,
          vocabulary: [],
          exercises: []
        },
        {
          id: 'negation',
          title: 'Отрицание: nicht и kein',
          explanation: `
            <h2 class="font-headline text-2xl font-bold mb-4">Когда использовать "kein"?</h2>
            <p class="mb-4">Отрицание <strong class="text-primary">kein</strong> используется только для отрицания <strong>существительных</strong>.</p>
            <ul class="list-disc list-inside space-y-2 mb-6 bg-muted p-4 rounded-lg">
              <li>С существительными, которые стоят <strong>с неопределенным артиклем</strong>.</li>
              <li><em>Ich habe <strong class="text-accent">einen</strong> Hund. → Ich habe <strong class="text-primary">keinen</strong> Hund.</em></li>
              <li class="mt-2">С существительными, которые стоят <strong>без артикля</strong> (нулевой артикль).</li>
              <li><em>Ich habe Hunger. → Ich habe <strong class="text-primary">keinen</strong> Hunger.</em></li>
              <li><em>Ich sehe Äpfel. → Ich sehe <strong class="text-primary">keine</strong> Äpfel.</em></li>
            </ul>
            <p class="mb-4"><strong class="text-primary">Kein</strong> склоняется так же, как неопределенный артикль 'ein'.</p>

            <h2 class="font-headline text-2xl font-bold mb-4">Когда использовать "nicht"?</h2>
            <p class="mb-4">Отрицание <strong class="text-primary">nicht</strong> используется во всех остальных случаях для отрицания:</p>
            <ul class="list-disc list-inside space-y-2 mb-6 bg-muted p-4 rounded-lg">
              <li><strong>Всего предложения</strong> (стоит в конце): <em>Ich komme <strong class="text-primary">nicht</strong>.</em></li>
              <li><strong>Глагола</strong> (стоит в конце): <em>Ich schlafe <strong class="text-primary">nicht</strong>.</em></li>
              <li><strong>Прилагательного</strong> (стоит перед прилагательным): <em>Das Auto ist <strong class="text-primary">nicht</strong> neu.</em></li>
              <li><strong>Наречия</strong> (стоит перед наречием): <em>Er spricht <strong class="text-primary">nicht</strong> schnell.</em></li>
              <li><strong>Существительного с определенным артиклем</strong> (стоит перед артиклем): <em>Das ist <strong class="text-primary">nicht</strong> der richtige Weg.</em></li>
              <li><strong>Существительного с притяжательным местоимением</strong> (стоит перед местоимением): <em>Das ist <strong class="text-primary">nicht</strong> mein Auto.</em></li>
            </ul>
          `,
          vocabulary: [],
          exercises: []
        },
        {
          id: 'modalverben',
          title: 'Модальные глаголы',
          explanation: `
            <p class="mb-4">Модальные глаголы изменяют смысл основного глагола, добавляя оттенок возможности, необходимости, желания и т.д. В предложении модальный глагол спрягается и стоит на 2-м месте, а основной глагол уходит в конец в форме инфинитива.</p>
            <div class="bg-muted p-3 rounded-lg italic my-4">Ich <strong class="text-primary">kann</strong> gut Deutsch <strong class="text-accent">sprechen</strong>.</div>
            <h2 class="font-headline text-2xl font-bold mb-4">Значения глаголов:</h2>
            <ul class="list-disc list-inside space-y-2 mb-6">
              <li><strong class="text-primary">können:</strong> мочь, уметь (физическая возможность, навык). <em>Ich kann schwimmen.</em></li>
              <li><strong class="text-primary">dürfen:</strong> мочь (иметь разрешение). <em>Hier darf man nicht rauchen.</em></li>
              <li><strong class="text-primary">müssen:</strong> быть должным (внутренняя необходимость, обязанность). <em>Ich muss heute arbeiten.</em></li>
              <li><strong class="text-primary">sollen:</strong> быть должным (по чьему-то указанию, совет). <em>Der Arzt sagt, ich soll mehr schlafen.</em></li>
              <li><strong class="text-primary">wollen:</strong> хотеть (сильное желание, план). <em>Ich will nach Deutschland fliegen.</em></li>
              <li><strong class="text-primary">mögen/möchten:</strong> любить, нравиться / хотел бы (вежливое желание). <em>Ich mag Pizza. Ich möchte einen Kaffee bestellen.</em></li>
            </ul>
          `,
          vocabulary: [],
          exercises: []
        },
        {
          id: 'konjunktionen',
          title: 'Союзы (Konjunktionen)',
          explanation: `
            <p class="mb-4">Союзы связывают слова и предложения. Они делятся на две основные группы по влиянию на порядок слов.</p>
            <h2 class="font-headline text-2xl font-bold mb-4">1. Сочинительные союзы (прямой порядок слов)</h2>
            <p class="mb-4">Эти союзы соединяют равноправные предложения и не влияют на порядок слов. Глагол после них стоит на своем обычном месте. Запомнить их можно по акрониму <strong class="text-primary">ADUSO</strong>.</p>
            <ul class="list-disc list-inside space-y-2 mb-6 bg-muted p-4 rounded-lg">
              <li><strong>a</strong>ber - но: <em>Ich will kommen, <strong class="text-primary">aber</strong> ich habe keine Zeit.</em></li>
              <li><strong>d</strong>enn - так как, потому что: <em>Ich lerne Deutsch, <strong class="text-primary">denn</strong> ich will in Deutschland arbeiten.</em></li>
              <li><strong>u</strong>nd - и: <em>Er liest ein Buch <strong class="text-primary">und</strong> sie hört Musik.</em></li>
              <li><strong>s</strong>ondern - а, но (при противопоставлении с отрицанием): <em>Das ist nicht Kaffee, <strong class="text-primary">sondern</strong> Tee.</em></li>
              <li><strong>o</strong>der - или: <em>Fahren wir ans Meer <strong class="text-primary">oder</strong> bleiben wir zu Hause?</em></li>
            </ul>

            <h2 class="font-headline text-2xl font-bold mb-4">2. Подчинительные союзы (глагол в конце)</h2>
            <p class="mb-4">Эти союзы вводят придаточное предложение. Спрягаемый глагол в придаточном предложении всегда уходит в <strong>конец</strong>.</p>
            <ul class="list-disc list-inside space-y-2 mb-6 bg-muted p-4 rounded-lg">
              <li><strong>dass</strong> - что: <em>Ich weiß, <strong class="text-primary">dass</strong> du müde <strong class="text-accent">bist</strong>.</em></li>
              <li><strong>weil</strong> - потому что: <em>Ich komme nicht, <strong class="text-primary">weil</strong> ich krank <strong class="text-accent">bin</strong>.</em></li>
              <li><strong>wenn</strong> - когда, если: <em><strong class="text-primary">Wenn</strong> das Wetter gut <strong class="text-accent">ist</strong>, gehen wir spazieren.</em></li>
              <li><strong>obwohl</strong> - хотя: <em>Er geht zur Arbeit, <strong class="text-primary">obwohl</strong> er sich nicht gut <strong class="text-accent">fühlt</strong>.</em></li>
              <li><strong>ob</strong> - ли (в косвенных вопросах): <em>Ich weiß nicht, <strong class="text-primary">ob</strong> er <strong class="text-accent">kommt</strong>.</em></li>
            </ul>
          `,
          vocabulary: [],
          exercises: []
        },
        {
          id: 'praepositionen',
          title: 'Предлоги (Präpositionen)',
          explanation: `
            <p class="mb-4">Предлоги в немецком языке требуют после себя определенного падежа.</p>
            <h2 class="font-headline text-2xl font-bold mb-4">1. Предлоги с Akkusativ</h2>
            <p class="mb-4">Всегда требуют винительного падежа. Запомнить можно по мнемонике "FUDGE-O".</p>
            <ul class="list-disc list-inside space-y-2 mb-6 bg-muted p-4 rounded-lg">
              <li><strong>f</strong>ür - для: <em>Das Geschenk ist <strong class="text-primary">für dich</strong>.</em></li>
              <li><strong>u</strong>m - вокруг, в (о времени): <em>Wir sitzen <strong class="text-primary">um den</strong> Tisch. Der Film beginnt <strong class="text-primary">um</strong> 20 Uhr.</em></li>
              <li><strong>d</strong>urch - через, сквозь: <em>Wir fahren <strong class="text-primary">durch den</strong> Tunnel.</em></li>
              <li><strong>g</strong>egen - против: <em>Er spielt <strong class="text-primary">gegen seinen</strong> Freund.</em></li>
              <li><strong>e</strong>ntlang - вдоль: <em>Wir gehen <strong class="text-primary">den Fluss entlang</strong>.</em> (предлог стоит после сущ.)</li>
              <li><strong>o</strong>hne - без: <em>Ich trinke Kaffee <strong class="text-primary">ohne Zucker</strong>.</em></li>
            </ul>

            <h2 class="font-headline text-2xl font-bold mb-4">2. Предлоги с Dativ</h2>
            <p class="mb-4">Всегда требуют дательного падежа.</p>
            <ul class="list-disc list-inside space-y-2 mb-6 bg-muted p-4 rounded-lg">
              <li><strong>aus</strong> - из: <em>Er kommt <strong class="text-primary">aus der</strong> Schweiz.</em></li>
              <li><strong>bei</strong> - у, при: <em>Ich wohne <strong class="text-primary">bei meinen</strong> Eltern.</em></li>
              <li><strong>mit</strong> - с: <em>Ich fahre <strong class="text-primary">mit dem</strong> Bus.</em></li>
              <li><strong>nach</strong> - в, на (направления), после: <em>Wir fliegen <strong class="text-primary">nach</strong> Deutschland. <strong class="text-primary">Nach der</strong> Arbeit gehe ich nach Hause.</em></li>
              <li><strong>seit</strong> - с (с каких-то пор): <em>Ich lerne <strong class="text-primary">seit einem</strong> Jahr Deutsch.</em></li>
              <li><strong>von</strong> - от, с: <em>Das ist ein Geschenk <strong class="text-primary">von meiner</strong> Freundin.</em></li>
              <li><strong>zu</strong> - к, на: <em>Ich gehe <strong class="text-primary">zum</strong> Arzt.</em> (zu + dem)</li>
            </ul>

            <h2 class="font-headline text-2xl font-bold mb-4">3. Предлоги двойного управления (Wechselpräpositionen)</h2>
            <p class="mb-4">Эти предлоги могут использоваться как с Dativ, так и с Akkusativ. Правило простое:</p>
            <ul class="list-disc list-inside space-y-2 mb-6">
              <li>Вопрос <strong>Wo?</strong> (где?) → <strong class="text-primary">Dativ</strong>: <em>Das Buch liegt <strong class="text-accent">auf dem</strong> Tisch.</em></li>
              <li>Вопрос <strong>Wohin?</strong> (куда?) → <strong class="text-primary">Akkusativ</strong>: <em>Ich lege das Buch <strong class="text-accent">auf den</strong> Tisch.</em></li>
            </ul>
            <p>К этим предлогам относятся: <strong>in, an, auf, neben, über, unter, vor, hinter, zwischen</strong>.</p>
          `,
          vocabulary: [],
          exercises: []
        }
      ]
    },
    {
      id: 'a1',
      title: 'Уровень A1: Начинающий',
      description: 'Основы для уверенного старта. Вы научитесь представляться, вести простые диалоги, понимать базовые фразы и строить предложения в настоящем времени.',
      topics: [
        {
          id: 'personal-info-und-familie',
          title: 'Знакомство, личная информация и семья',
          explanation: `
            <h2 class="font-headline text-2xl font-bold mb-4">Основы общения</h2>
            <p class="mb-4">Самые первые и важные фразы для любого разговора. Учимся здороваться, прощаться и представляться.</p>
            <ul class="list-disc list-inside space-y-2 mb-6 bg-muted p-4 rounded-lg">
              <li><strong>Приветствия:</strong> Hallo, Guten Morgen, Guten Tag, Guten Abend</li>
              <li><strong>Прощания:</strong> Tschüss, Auf Wiedersehen</li>
              <li><strong>Вопросы о самочувствии:</strong> Wie geht es Ihnen? / Wie geht's? - Gut, danke.</li>
            </ul>

            <h2 class="font-headline text-2xl font-bold mb-4">Представление себя и других</h2>
            <p class="mb-4">Учимся говорить, как нас зовут, откуда мы и на каком языке говорим. Здесь мы впервые сталкиваемся с падежом <strong class="text-primary">Nominativ</strong> (Именительный), который отвечает на вопросы "Кто? Что?" (<strong class="text-primary">Wer? Was?</strong>) и обозначает подлежащее.</p>
            <ul class="list-disc list-inside space-y-2 mb-6 bg-muted p-4 rounded-lg">
              <li><strong>Wie heißen Sie? / Wie heißt du?</strong> - Как Вас/тебя зовут?</li>
              <li><strong>Ich heiße... / Mein Name ist...</strong> - Меня зовут... / Моё имя...</li>
              <li><strong>Woher kommen Sie? / Woher kommst du?</strong> - Откуда Вы/ты?</li>
              <li><strong>Ich komme aus Russland.</strong> - Я из России.</li>
              <li><strong>Welche Sprachen sprechen Sie?</strong> - На каких языках Вы говорите?</li>
              <li><strong>Ich spreche Russisch und ein bisschen Deutsch.</strong> - Я говорю по-русски и немного по-немецки.</li>
            </ul>

            <h2 class="font-headline text-2xl font-bold mb-4">Семья и личные данные</h2>
            <p class="mb-4">Рассказываем о своей семье. Здесь нам понадобятся притяжательные местоимения.</p>
            <ul class="list-disc list-inside space-y-2 mb-6 p-4 bg-muted rounded-lg">
              <li><strong>Das ist meine Familie.</strong> - Это моя семья.</li>
              <li><strong>Mein Vater, meine Mutter, mein Bruder, meine Schwester.</strong> - Мой отец, моя мать, мой брат, моя сестра.</li>
              <li><strong>Sind Sie verheiratet?</strong> - Вы женаты/замужем? - Ja, ich bin verheiratet. / Nein, ich bin ledig.</li>
              <li><strong>Haben Sie Kinder?</strong> - У Вас есть дети? - Ja, ich habe einen Sohn und eine Tochter.</li>
            </ul>

            <h3 class="font-headline text-xl font-semibold mt-6 mb-2">Грамматика: Притяжательные местоимения</h3>
            <p class="mb-4">Притяжательные местоимения (мой, твой, его...) показывают принадлежность и согласуются с родом существительного.</p>
            <div class="overflow-x-auto">
              <table class="w-full text-left border-collapse my-4">
                <thead><tr class="bg-muted/50"><th class="border p-3"></th><th class="border p-3">муж.р. (der)</th><th class="border p-3">жен.р. (die)</th><th class="border p-3">сред.р. (das)</th></tr></thead>
                <tbody>
                  <tr><td class="border p-3 font-medium">ich</td><td class="border p-3">mein</td><td class="border p-3">meine</td><td class="border p-3">mein</td></tr>
                  <tr><td class="border p-3 font-medium">du</td><td class="border p-3">dein</td><td class="border p-3">deine</td><td class="border p-3">dein</td></tr>
                  <tr><td class="border p-3 font-medium">er/es</td><td class="border p-3">sein</td><td class="border p-3">seine</td><td class="border p-3">sein</td></tr>
                  <tr><td class="border p-3 font-medium">sie</td><td class="border p-3">ihr</td><td class="border p-3">ihre</td><td class="border p-3">ihr</td></tr>
                </tbody>
              </table>
            </div>
          `,
          vocabulary: [
            {
              theme: 'Приветствия и вежливость',
              words: [
                { type: 'other', german: 'Hallo', russian: 'привет', example: 'Hallo, wie geht\'s?' },
                { type: 'other', german: 'Guten Morgen', russian: 'доброе утро', example: 'Guten Morgen, Herr Schmidt.' },
                { type: 'other', german: 'Guten Tag', russian: 'добрый день', example: 'Guten Tag, Frau Meier.' },
                { type: 'other', german: 'Guten Abend', russian: 'добрый вечер', example: 'Guten Abend, meine Damen und Herren.' },
                { type: 'other', german: 'Tschüss', russian: 'пока', example: 'Tschüss, bis morgen!' },
                { type: 'other', german: 'Auf Wiedersehen', russian: 'до свидания', example: 'Auf Wiedersehen, auf einen schönen Abend.' },
                { type: 'other', german: 'Wie geht’s?', russian: 'как дела?', example: 'Hallo, wie geht\'s? - Danke, gut.'},
                { type: 'other', german: 'Danke', russian: 'спасибо', example: 'Danke für Ihre Hilfe.' },
                { type: 'other', german: 'Bitte', russian: 'пожалуйста', example: 'Ein Glas Wasser, bitte.' },
                { type: 'other', german: 'Entschuldigung', russian: 'извините', example: 'Entschuldigung, wo ist der Bahnhof?' },
                { type: 'other', german: 'Ja', russian: 'да', example: 'Ja, ich komme aus Berlin.' },
                { type: 'other', german: 'Nein', russian: 'нет', example: 'Nein, das stimmt nicht.' },
                { type: 'other', german: 'Vielleicht', russian: 'возможно', example: 'Vielleicht komme ich später.' },
                { type: 'other', german: 'Bitte schön', russian: 'пожалуйста (в ответ на спасибо)', example: 'Hier ist Ihr Kaffee. - Danke! - Bitte schön.' },
                { type: 'other', german: 'Gern geschehen', russian: 'не за что', example: 'Vielen Dank für Ihre Hilfe! - Gern geschehen.' },
              ],
            },
            {
                theme: 'Личная информация',
                words: [
                    { type: 'noun', german: 'Name', russian: 'имя, фамилия', article: 'der', plural: 'Namen', pluralArticle: 'die', exampleSingular: 'Mein Name ist Bond.', examplePlural: 'Die Namen der Gewinner werden verlesen.' },
                    { type: 'noun', german: 'Vorname', russian: 'имя (личное)', article: 'der', plural: 'Vornamen', pluralArticle: 'die', exampleSingular: 'Wie ist Ihr Vorname?', examplePlural: 'In Deutschland sind viele Vornamen beliebt.' },
                    { type: 'noun', german: 'Nachname', russian: 'фамилия', article: 'der', plural: 'Nachnamen', pluralArticle: 'die', exampleSingular: 'Mein Nachname ist Müller.', examplePlural: 'Schmidt und Schneider sind häufige Nachnamen.' },
                    { type: 'noun', german: 'Alter', russian: 'возраст', article: 'das', plural: 'Alter', pluralArticle: 'die', exampleSingular: 'Das Alter ist nur eine Zahl.', examplePlural: 'In verschiedenen Altern hat man verschiedene Interessen.' },
                    { type: 'noun', german: 'Adresse', russian: 'адрес', article: 'die', plural: 'Adressen', pluralArticle: 'die', exampleSingular: 'Können Sie mir Ihre Adresse geben?', examplePlural: 'Ich sammle die Adressen aller Teilnehmer.' },
                    { type: 'noun', german: 'Straße', russian: 'улица', article: 'die', plural: 'Straßen', pluralArticle: 'die', exampleSingular: 'Ich wohne in der Schillerstraße.', examplePlural: 'Die Straßen in der Innenstadt sind eng.' },
                    { type: 'noun', german: 'Hausnummer', russian: 'номер дома', article: 'die', plural: 'Hausnummern', pluralArticle: 'die', exampleSingular: 'Meine Hausnummer ist 22a.', examplePlural: 'Können Sie die Hausnummern gut erkennen?' },
                    { type: 'noun', german: 'Stadt', russian: 'город', article: 'die', plural: 'Städte', pluralArticle: 'die', exampleSingular: 'Berlin ist eine große Stadt.', examplePlural: 'Ich besuche gerne alte deutsche Städte.' },
                    { type: 'noun', german: 'Land', russian: 'страна', article: 'das', plural: 'Länder', pluralArticle: 'die', exampleSingular: 'Deutschland ist ein schönes Land.', examplePlural: 'Welche Länder hast du schon besucht?' },
                    { type: 'noun', german: 'Postleitzahl', russian: 'почтовый индекс', article: 'die', plural: 'Postleitzahlen', pluralArticle: 'die', exampleSingular: 'Die Postleitzahl von Berlin Mitte ist 10117.', examplePlural: 'Alle Städte haben verschiedene Postleitzahlen.' },
                    { type: 'noun', german: 'Geburtsdatum', russian: 'дата рождения', article: 'das', plural: 'Geburtsdaten', pluralArticle: 'die', exampleSingular: 'Was ist Ihr Geburtsdatum?', examplePlural: 'Die Geburtsdaten aller Mitarbeiter werden gespeichert.' },
                    { type: 'noun', german: 'Geburtsort', russian: 'место рождения', article: 'der', plural: 'Geburtsorte', pluralArticle: 'die', exampleSingular: 'Mein Geburtsort ist Moskau.', examplePlural: 'Die Geburtsorte meiner Eltern liegen nah beieinander.' },
                    { type: 'noun', german: 'Telefonnummer', russian: 'номер телефона', article: 'die', plural: 'Telefonnummern', pluralArticle: 'die', exampleSingular: 'Meine Telefonnummer ist 0123456789.', examplePlural: 'Bitte notieren Sie alle Telefonnummern.' },
                    { type: 'noun', german: 'E-Mail', russian: 'электронная почта', article: 'die', plural: 'E-Mails', pluralArticle: 'die', exampleSingular: 'Schicken Sie mir eine E-Mail.', examplePlural: 'Ich muss noch viele E-Mails beantworten.' },
                ]
            },
            {
              theme: 'Семья и люди',
              words: [
                { type: 'noun', german: 'Mann', russian: 'мужчина, муж', article: 'der', plural: 'Männer', pluralArticle: 'die', exampleSingular: 'Der Mann liest eine Zeitung.', examplePlural: 'Zwei Männer unterhalten sich.' },
                { type: 'noun', german: 'Frau', russian: 'женщина, жена', article: 'die', plural: 'Frauen', pluralArticle: 'die', exampleSingular: 'Die Frau trinkt einen Kaffee.', examplePlural: 'Viele Frauen arbeiten in diesem Unternehmen.' },
                { type: 'noun', german: 'Kind', russian: 'ребёнок', article: 'das', plural: 'Kinder', pluralArticle: 'die', exampleSingular: 'Das Kind spielt im Garten.', examplePlural: 'Die Kinder gehen in die Schule.' },
                { type: 'noun', german: 'Junge', russian: 'мальчик', article: 'der', plural: 'Jungen', pluralArticle: 'die', exampleSingular: 'Der Junge spielt Fußball.', examplePlural: 'Die Jungen klettern auf den Baum.' },
                { type: 'noun', german: 'Mädchen', russian: 'девочка', article: 'das', plural: 'Mädchen', pluralArticle: 'die', exampleSingular: 'Das Mädchen liest ein Buch.', examplePlural: 'Die Mädchen singen ein Lied.' },
                { type: 'noun', german: 'Vater', russian: 'отец', article: 'der', plural: 'Väter', pluralArticle: 'die', exampleSingular: 'Mein Vater ist Ingenieur.', examplePlural: 'Die Väter spielen mit ihren Kindern Fußball.' },
                { type: 'noun', german: 'Mutter', russian: 'мать', article: 'die', plural: 'Mütter', pluralArticle: 'die', exampleSingular: 'Meine Mutter kocht sehr gut.', examplePlural: 'Junge Mütter treffen sich im Park.' },
                { type: 'noun', german: 'Bruder', russian: 'брат', article: 'der', plural: 'Brüder', pluralArticle: 'die', exampleSingular: 'Mein Bruder studiert Medizin.', examplePlural: 'Ich habe zwei Brüder.' },
                { type: 'noun', german: 'Schwester', russian: 'сестра', article: 'die', plural: 'Schwestern', pluralArticle: 'die', exampleSingular: 'Meine Schwester wohnt in Hamburg.', examplePlural: 'Meine beiden Schwestern sind Lehrerinnen.' },
                { type: 'noun', german: 'Eltern', russian: 'родители', article: 'die', plural: '(Pluralwort)', pluralArticle: '-', exampleSingular: 'Meine Eltern leben auf dem Land.', examplePlural: 'Meine Eltern leben auf dem Land.' },
                { type: 'noun', german: 'Großeltern', russian: 'бабушка и дедушка', article: 'die', plural: '(Pluralwort)', pluralArticle: '-', exampleSingular: 'Ich besuche meine Großeltern am Wochenende.', examplePlural: 'Ich besuche meine Großeltern am Wochenende.' },
                { type: 'noun', german: 'Opa', russian: 'дедушка', article: 'der', plural: 'Opas', pluralArticle: 'die', exampleSingular: 'Mein Opa erzählt tolle Geschichten.', examplePlural: 'Alle Opas lieben ihre Enkelkinder.' },
                { type: 'noun', german: 'Oma', russian: 'бабушка', article: 'die', plural: 'Omas', pluralArticle: 'die', exampleSingular: 'Meine Oma backt den besten Kuchen.', examplePlural: 'Die Omas treffen sich zum Kaffeeklatsch.' },
                { type: 'noun', german: 'Onkel', russian: 'дядя', article: 'der', plural: 'Onkel', pluralArticle: 'die', exampleSingular: 'Mein Onkel wohnt in Amerika.', examplePlural: 'Meine Onkel sind alle sehr lustig.' },
                { type: 'noun', german: 'Tante', russian: 'тётя', article: 'die', plural: 'Tanten', pluralArticle: 'die', exampleSingular: 'Meine Tante bringt mir immer Schokolade mit.', examplePlural: 'Ich habe drei Tanten.' },
                { type: 'noun', german: 'Cousin', russian: 'кузен', article: 'der', plural: 'Cousins', pluralArticle: 'die', exampleSingular: 'Mein Cousin ist genauso alt wie ich.', examplePlural: 'Meine Cousins leben in Frankreich.' },
                { type: 'noun', german: 'Cousine', russian: 'кузина', article: 'die', plural: 'Cousinen', pluralArticle: 'die', exampleSingular: 'Meine Cousine studiert Kunst.', examplePlural: 'Ich gehe mit meiner Cousine einkaufen.' },
                { type: 'noun', german: 'Freund', russian: 'друг', article: 'der', plural: 'Freunde', pluralArticle: 'die', exampleSingular: 'Ich treffe heute meinen besten Freund.', examplePlural: 'Am Wochenende feiere ich mit meinen Freunden.' },
                { type: 'noun', german: 'Freundin', russian: 'подруга', article: 'die', plural: 'Freundinnen', pluralArticle: 'die', exampleSingular: 'Meine Freundin und ich gehen ins Kino.', examplePlural: 'Sie hat viele Freundinnen.' },
                { type: 'noun', german: 'Kollege', russian: 'коллега (муж.)', article: 'der', plural: 'Kollegen', pluralArticle: 'die', exampleSingular: 'Mein Kollege ist sehr hilfsbereit.', examplePlural: 'Ich habe viele nette Kollegen.' },
                { type: 'noun', german: 'Kollegin', russian: 'коллега (жен.)', article: 'die', plural: 'Kolleginnen', pluralArticle: 'die', exampleSingular: 'Meine Kollegin kommt aus Spanien.', examplePlural: 'Die Kolleginnen machen zusammen Mittagspause.' },
              ]
            }
          ],
          exercises: []
        },
        {
          id: 'alltag-und-wohnen',
          title: 'Быт, дом и распорядок дня',
          explanation: `
            <h2 class="font-headline text-2xl font-bold mb-4">Дом и квартира</h2>
            <p class="mb-4">Учимся описывать, где мы живем, и называть комнаты и мебель. Используем предлоги места.</p>
            <ul class="list-disc list-inside space-y-2 mb-6 bg-muted p-4 rounded-lg">
              <li><strong>Типы жилья:</strong> das Haus (дом), die Wohnung (квартира), das Zimmer (комната).</li>
              <li><strong>Комнаты:</strong> die Küche (кухня), das Bad (ванная), das Schlafzimmer (спальня), das Wohnzimmer (гостиная).</li>
              <li><strong>Мебель:</strong> der Tisch (стол), der Stuhl (стул), das Bett (кровать), der Schrank (шкаф), das Sofa (диван).</li>
              <li><strong>Описание:</strong> Meine Wohnung ist groß/klein/hell/dunkel. Das Zimmer hat ein Fenster.</li>
            </ul>

            <h2 class="font-headline text-2xl font-bold mb-4">Распорядок дня и время</h2>
            <p class="mb-4">Говорим о том, что мы делаем в течение дня. Здесь важны глаголы с отделяемыми приставками.</p>
            <ul class="list-disc list-inside space-y-2 mb-6 bg-muted p-4 rounded-lg">
              <li><strong>Время:</strong> Wie spät ist es? Es ist zehn Uhr. (10:00). Es ist halb elf (10:30).</li>
              <li><strong>Части дня:</strong> der Morgen (утро), der Vormittag (до полудня), der Mittag (полдень), der Nachmittag (после полудня), der Abend (вечер).</li>
              <li><strong>Дни недели:</strong> Montag, Dienstag, Mittwoch... Am Montag arbeite ich.</li>
              <li><strong>Распорядок:</strong> Ich <strong class="text-primary">stehe</strong> um 7 Uhr <strong class="text-primary">auf</strong>. Dann <strong class="text-primary">frühstücke</strong> ich. Ich <strong class="text-primary">kaufe</strong> im Supermarkt <strong class="text-primary">ein</strong>. Abends <strong class="text-primary">rufe</strong> ich meine Freunde <strong class="text-primary">an</strong>.</li>
            </ul>
            
            <h3 class="font-headline text-xl font-semibold mt-6 mb-2">Грамматика: Глаголы с отделяемыми приставками (Trennbare Verben)</h3>
            <p class="mb-4">У некоторых глаголов есть приставка, которая в простом предложении в Präsens "отделяется" и уходит в самый конец. Например: <strong class="text-primary">auf</strong>stehen, <strong class="text-primary">ein</strong>kaufen, <strong class="text-primary">an</strong>rufen, <strong class="text-primary">fern</strong>sehen.</p>
            <div class="bg-muted p-3 rounded-lg italic my-4">Ich <strong class="text-accent">rufe</strong> meine Freundin <strong class="text-primary">an</strong>. (Я звоню моей подруге.)</div>
            <p class="mb-4">В вопросах и после модальных глаголов приставка не отделяется: <em class="italic">Wann <strong class="text-primary">stehst</strong> du <strong class="text-primary">auf</strong>?</em>, <em class="italic">Ich will heute nicht <strong class="text-primary">fernsehen</strong>.</em></p>
          `,
          vocabulary: [
             {
              theme: 'Дом, квартира и мебель',
              words: [
                { type: 'noun', german: 'Haus', russian: 'дом', article: 'das', plural: 'Häuser', pluralArticle: 'die', exampleSingular: 'Wir wohnen in einem großen Haus.', examplePlural: 'Die Häuser in dieser Straße sind sehr alt.' },
                { type: 'noun', german: 'Wohnung', russian: 'квартира', article: 'die', plural: 'Wohnungen', pluralArticle: 'die', exampleSingular: 'Meine Wohnung hat drei Zimmer.', examplePlural: 'Die Wohnungen im Stadtzentrum sind teuer.' },
                { type: 'noun', german: 'Zimmer', russian: 'комната', article: 'das', plural: 'Zimmer', pluralArticle: 'die', exampleSingular: 'Mein Zimmer ist sehr gemütlich.', examplePlural: 'Das Hotel hat 100 Zimmer.' },
                { type: 'noun', german: 'Küche', russian: 'кухня', article: 'die', plural: 'Küchen', pluralArticle: 'die', exampleSingular: 'Die Küche ist neu und modern.', examplePlural: 'Wir essen oft in der Küche.' },
                { type: 'noun', german: 'Bad', russian: 'ванная', article: 'das', plural: 'Bäder', pluralArticle: 'die', exampleSingular: 'Das Bad hat eine Dusche und eine Badewanne.', examplePlural: 'Moderne Bäder sind oft klein.' },
                { type: 'noun', german: 'Wohnzimmer', russian: 'гостиная', article: 'das', plural: 'Wohnzimmer', pluralArticle: 'die', exampleSingular: 'Im Wohnzimmer steht ein großes Sofa.', examplePlural: 'Unsere Wohnzimmer sind der Treffpunkt der Familie.' },
                { type: 'noun', german: 'Schlafzimmer', russian: 'спальня', article: 'das', plural: 'Schlafzimmer', pluralArticle: 'die', exampleSingular: 'Das Schlafzimmer ist sehr ruhig.', examplePlural: 'Das Haus hat vier Schlafzimmer.' },
                { type: 'noun', german: 'Balkon', russian: 'балкон', article: 'der', plural: 'Balkone', pluralArticle: 'die', exampleSingular: 'Im Sommer sitze ich oft auf dem Balkon.', examplePlural: 'Viele Wohnungen haben heute Balkone.' },
                { type: 'noun', german: 'Garten', russian: 'сад', article: 'der', plural: 'Gärten', pluralArticle: 'die', exampleSingular: 'Wir haben einen kleinen Garten hinter dem Haus.', examplePlural: 'Die Gärten blühen im Frühling.' },
                { type: 'noun', german: 'Treppe', russian: 'лестница', article: 'die', plural: 'Treppen', pluralArticle: 'die', exampleSingular: 'Der Aufzug ist kaputt, wir müssen die Treppe nehmen.', examplePlural: 'Vorsicht, die Treppen sind rutschig.' },
                { type: 'noun', german: 'Flur', russian: 'коридор', article: 'der', plural: 'Flure', pluralArticle: 'die', exampleSingular: 'Die Schuhe stehen im Flur.', examplePlural: 'Die Flure des Hotels sind sehr lang.' },
                { type: 'noun', german: 'Tür', russian: 'дверь', article: 'die', plural: 'Türen', pluralArticle: 'die', exampleSingular: 'Bitte schließ die Tür.', examplePlural: 'Die Türen sind aus Holz.' },
                { type: 'noun', german: 'Fenster', russian: 'окно', article: 'das', plural: 'Fenster', pluralArticle: 'die', exampleSingular: 'Machst du bitte das Fenster auf?', examplePlural: 'Die Fenster müssen geputzt werden.' },
                 { type: 'noun', german: 'Tisch', russian: 'стол', article: 'der', plural: 'Tische', pluralArticle: 'die', exampleSingular: 'Das Essen steht auf dem Tisch.', examplePlural: 'Für die Party brauchen wir mehr Tische.' },
                { type: 'noun', german: 'Stuhl', russian: 'стул', article: 'der', plural: 'Stühle', pluralArticle: 'die', exampleSingular: 'Dieser Stuhl ist sehr bequem.', examplePlural: 'Wir brauchen noch vier Stühle.' },
                { type: 'noun', german: 'Bett', russian: 'кровать', article: 'das', plural: 'Betten', pluralArticle: 'die', exampleSingular: 'Ich gehe jetzt ins Bett.', examplePlural: 'Das Hotel hat sehr bequeme Betten.' },
                { type: 'noun', german: 'Schrank', russian: 'шкаф', article: 'der', plural: 'Schränke', pluralArticle: 'die', exampleSingular: 'Meine Kleidung ist im Schrank.', examplePlural: 'In der Küche gibt es viele Schränke.' },
                { type: 'noun', german: 'Sofa', russian: 'диван', article: 'das', plural: 'Sofas', pluralArticle: 'die', exampleSingular: 'Wir sitzen auf dem Sofa und sehen fern.', examplePlural: 'Diese Sofas sind sehr modern.' },
                { type: 'noun', german: 'Sessel', russian: 'кресло', article: 'der', plural: 'Sessel', pluralArticle: 'die', exampleSingular: 'Mein Opa sitzt gerne in seinem Sessel.', examplePlural: 'Die Sessel im Wartezimmer sind sehr bequem.' },
                { type: 'noun', german: 'Lampe', russian: 'лампа', article: 'die', plural: 'Lampen', pluralArticle: 'die', exampleSingular: 'Die Lampe über dem Tisch ist neu.', examplePlural: 'Schalte bitte alle Lampen aus.' },
                { type: 'noun', german: 'Teppich', russian: 'ковер', article: 'der', plural: 'Teppiche', pluralArticle: 'die', exampleSingular: 'Der Teppich ist sehr weich.', examplePlural: 'Persische Teppiche sind weltberühmt.' },
                { type: 'noun', german: 'Fernseher', russian: 'телевизор', article: 'der', plural: 'Fernseher', pluralArticle: 'die', exampleSingular: 'Der Fernseher ist zu laut.', examplePlural: 'Moderne Fernseher haben eine tolle Bildqualität.' },
                { type: 'noun', german: 'Kühlschrank', russian: 'холодильник', article: 'der', plural: 'Kühlschränke', pluralArticle: 'die', exampleSingular: 'Die Milch steht im Kühlschrank.', examplePlural: 'Moderne Kühlschränke verbrauchen wenig Strom.' },
                { type: 'noun', german: 'Herd', russian: 'плита', article: 'der', plural: 'Herde', pluralArticle: 'die', exampleSingular: 'Die Suppe kocht auf dem Herd.', examplePlural: 'Induktionsherde sind sehr effizient.' },
                { type: 'noun', german: 'Waschmaschine', russian: 'стиральная машина', article: 'die', plural: 'Waschmaschinen', pluralArticle: 'die', exampleSingular: 'Die Waschmaschine ist kaputt.', examplePlural: 'Die meisten Haushalte haben Waschmaschinen.' },
              ]
            },
            {
                theme: 'Тело и здоровье',
                words: [
                    { type: 'noun', german: 'Kopf', russian: 'голова', article: 'der', plural: 'Köpfe', pluralArticle: 'die', exampleSingular: 'Mir tut der Kopf weh.', examplePlural: 'Kluge Köpfe sind gefragt.' },
                    { type: 'noun', german: 'Arm', russian: 'рука (от плеча до кисти)', article: 'der', plural: 'Arme', pluralArticle: 'die', exampleSingular: 'Er hat sich den Arm gebrochen.', examplePlural: 'Sie hat lange Arme.' },
                    { type: 'noun', german: 'Hand', russian: 'кисть руки', article: 'die', plural: 'Hände', pluralArticle: 'die', exampleSingular: 'Gib mir deine Hand.', examplePlural: 'Wasch dir bitte die Hände.' },
                    { type: 'noun', german: 'Bein', russian: 'нога (целиком)', article: 'das', plural: 'Beine', pluralArticle: 'die', exampleSingular: 'Mein rechtes Bein schläft.', examplePlural: 'Spinnen haben acht Beine.' },
                    { type: 'noun', german: 'Fuß', russian: 'стопа', article: 'der', plural: 'Füße', pluralArticle: 'die', exampleSingular: 'Mir ist ein Stein auf den Fuß gefallen.', examplePlural: 'Meine Füße tun vom Laufen weh.' },
                    { type: 'noun', german: 'Auge', russian: 'глаз', article: 'das', plural: 'Augen', pluralArticle: 'die', exampleSingular: 'Sie hat blaue Augen.', examplePlural: 'Mach die Augen auf!' },
                    { type: 'noun', german: 'Ohr', russian: 'ухо', article: 'das', plural: 'Ohren', pluralArticle: 'die', exampleSingular: 'Ich habe Ohrenschmerzen.', examplePlural: 'Hasen haben lange Ohren.' },
                    { type: 'noun', german: 'Mund', russian: 'рот', article: 'der', plural: 'Münder', pluralArticle: 'die', exampleSingular: 'Öffne den Mund.', examplePlural: 'Lachende Münder sind schön.' },
                    { type: 'noun', german: 'Nase', russian: 'нос', article: 'die', plural: 'Nasen', pluralArticle: 'die', exampleSingular: 'Meine Nase läuft.', examplePlural: 'Hunde haben feine Nasen.' },
                    { type: 'noun', german: 'Bauch', russian: 'живот', article: 'der', plural: 'Bäuche', pluralArticle: 'die', exampleSingular: 'Ich habe Bauchschmerzen.', examplePlural: 'Die schwangeren Bäuche waren rund.' },
                    { type: 'noun', german: 'Rücken', russian: 'спина', article: 'der', plural: 'Rücken', pluralArticle: 'die', exampleSingular: 'Mir tut der Rücken weh.', examplePlural: 'Starke Rücken können viel tragen.' },
                    { type: 'noun', german: 'Kopfschmerzen', russian: 'головная боль', article: 'die', plural: '(Pluralwort)', pluralArticle: '-', exampleSingular: 'Ich habe starke Kopfschmerzen.', examplePlural: 'Ich habe starke Kopfschmerzen.' },
                    { type: 'noun', german: 'Fieber', russian: 'температура, жар', article: 'das', plural: 'Fieber', pluralArticle: 'die', exampleSingular: 'Das Kind hat hohes Fieber.', examplePlural: 'Tropische Fieber können gefährlich sein.' },
                    { type: 'noun', german: 'Husten', russian: 'кашель', article: 'der', plural: 'Husten', pluralArticle: 'die', exampleSingular: 'Der Husten stört mich beim Schlafen.', examplePlural: 'Es gibt verschiedene Arten von Husten.' },
                    { type: 'noun', german: 'Schnupfen', russian: 'насморк', article: 'der', plural: 'Schnupfen', pluralArticle: 'die', exampleSingular: 'Im Winter habe ich oft Schnupfen.', examplePlural: 'Die Schnupfen sind sehr ansteckend.' },
                ]
            },
            {
                theme: 'Время и даты',
                words: [
                    { type: 'noun', german: 'Uhr', russian: 'час, часы', article: 'die', plural: 'Uhren', pluralArticle: 'die', exampleSingular: 'Es ist drei Uhr.', examplePlural: 'Ich sammle alte Uhren.' },
                    { type: 'noun', german: 'Stunde', russian: 'час (продолжительность)', article: 'die', plural: 'Stunden', pluralArticle: 'die', exampleSingular: 'Der Film dauert eine Stunde.', examplePlural: 'Ich habe zwei Stunden gewartet.' },
                    { type: 'noun', german: 'Minute', russian: 'минута', article: 'die', plural: 'Minuten', pluralArticle: 'die', exampleSingular: 'Ich bin in einer Minute da.', examplePlural: 'Warte bitte fünf Minuten.' },
                    { type: 'noun', german: 'Tag', russian: 'день', article: 'der', plural: 'Tage', pluralArticle: 'die', exampleSingular: 'Heute ist ein schöner Tag.', examplePlural: 'Die Woche hat sieben Tage.' },
                    { type: 'noun', german: 'Woche', russian: 'неделя', article: 'die', plural: 'Wochen', pluralArticle: 'die', exampleSingular: 'Nächste Woche habe ich Urlaub.', examplePlural: 'Ich fahre für zwei Wochen weg.' },
                    { type: 'noun', german: 'Monat', russian: 'месяц', article: 'der', plural: 'Monate', pluralArticle: 'die', exampleSingular: 'Der Mai ist mein Lieblingsmonat.', examplePlural: 'Das Jahr hat zwölf Monate.' },
                    { type: 'noun', german: 'Jahr', russian: 'год', article: 'das', plural: 'Jahre', pluralArticle: 'die', exampleSingular: 'Dieses Jahr lerne ich Deutsch.', examplePlural: 'Ich lebe seit drei Jahren in Deutschland.' },
                    { type: 'other', german: 'heute', russian: 'сегодня', example: 'Was machst du heute?' },
                    { type: 'other', german: 'morgen', russian: 'завтра', example: 'Morgen habe ich einen Termin.' },
                    { type: 'other', german: 'gestern', russian: 'вчера', example: 'Gestern war ich im Kino.' },
                    { type: 'other', german: 'Montag', russian: 'понедельник', example: 'Am Montag beginnt die neue Woche.' },
                    { type: 'other', german: 'Dienstag', russian: 'вторник', example: 'Ich habe am Dienstag einen Arzttermin.' },
                    { type: 'other', german: 'Mittwoch', russian: 'среда', example: 'Am Mittwoch treffe ich meine Freunde.' },
                    { type: 'other', german: 'Donnerstag', russian: 'четверг', example: 'Donnerstag ist fast Wochenende.' },
                    { type: 'other', german: 'Freitag', russian: 'пятница', example: 'Freitagabend gehe ich oft aus.' },
                    { type: 'other', german: 'Samstag', russian: 'суббота', example: 'Am Samstag schlafe ich lange.' },
                    { type: 'other', german: 'Sonntag', russian: 'воскресенье', example: 'Sonntag ist ein Ruhetag.' },
                    { type: 'other', german: 'Januar', russian: 'январь', example: 'Im Januar ist es kalt.' },
                    { type: 'other', german: 'Februar', russian: 'февраль', example: 'Der Februar ist der kürzeste Monat.' },
                    { type: 'other', german: 'März', russian: 'март', example: 'Im März beginnt der Frühling.' },
                    { type: 'other', german: 'April', russian: 'апрель', example: 'Der April macht, was er will.' },
                    { type: 'other', german: 'Mai', russian: 'май', example: 'Im Mai blühen die Blumen.' },
                    { type: 'other', german: 'Juni', russian: 'июнь', example: 'Im Juni fängt der Sommer an.' },
                    { type: 'other', german: 'Juli', russian: 'июль', example: 'Im Juli ist es oft sehr heiß.' },
                    { type: 'other', german: 'August', russian: 'август', example: 'Wir fahren im August in den Urlaub.' },
                    { type: 'other', german: 'September', russian: 'сентябрь', example: 'Im September beginnt die Schule.' },
                    { type: 'other', german: 'Oktober', russian: 'октябрь', example: 'Der Oktober ist oft golden.' },
                    { type: 'other', german: 'November', russian: 'ноябрь', example: 'Im November ist es oft neblig.' },
                    { type: 'other', german: 'Dezember', russian: 'декабрь', example: 'Im Dezember ist Weihnachten.' },
                ]
            },
          ],
          exercises: []
        },
        {
          id: 'essen-und-einkaufen',
          title: 'Покупки, еда и напитки',
          explanation: `
            <h2 class="font-headline text-2xl font-bold mb-4">В магазине</h2>
            <p class="mb-4">Учимся покупать продукты и одежду. Здесь нам понадобится падеж <strong class="text-primary">Akkusativ</strong> (Винительный), который отвечает на вопросы "Кого? Что?" (<strong class="text-primary">Wen? Was?</strong>). Он используется для обозначения прямого объекта действия.</p>
            <ul class="list-disc list-inside space-y-2 mb-6 bg-muted p-4 rounded-lg">
              <li><strong>Что вы хотите?</strong> - Was möchten Sie?</li>
              <li><strong>Я хотел бы...</strong> - Ich möchte <strong class="text-accent">einen Apfel</strong>, <strong class="text-accent">eine Banane</strong> und <strong class="text-accent">ein Brot</strong>.</li>
              <li><strong>Вам нужно что-то еще?</strong> - Brauchen Sie noch etwas?</li>
              <li><strong>Сколько это стоит?</strong> - Was kostet das? / Wie viel kostet das?</li>
              <li><strong>Это стоит...</strong> - Das kostet 2 Euro 50.</li>
            </ul>

            <h3 class="font-headline text-xl font-semibold mt-6 mb-2">Грамматика: Akkusativ</h3>
            <p class="mb-4">Самое важное правило на этом этапе: <strong class="text-primary">в Akkusativ меняется только артикль мужского рода (der → den, ein → einen)</strong>. Остальные остаются такими же, как в Nominativ.</p>
            <ul class="list-disc list-inside space-y-2 mb-6">
              <li>Nominativ: <strong class="text-primary">Der</strong> Apfel ist rot. (Яблоко - красное.)</li>
              <li>Akkusativ: Ich esse <strong class="text-accent">den</strong> Apfel. (Я ем яблоко.)</li>
              <li>Nominativ: <strong class="text-primary">Die</strong> Banane ist gelb. (Банан - желтый.)</li>
              <li>Akkusativ: Ich esse <strong class="text-accent">die</strong> Banane. (Я ем банан.)</li>
            </ul>

            <h2 class="font-headline text-2xl font-bold mb-4">В ресторане</h2>
            <p class="mb-4">Заказываем еду и напитки. Глагол <strong class="text-primary">mögen</strong> (нравиться) и его вежливая форма <strong class="text-primary">möchten</strong> (хотел бы) очень важны здесь. Также важно отрицание <strong class="text-accent">kein</strong>.</p>
             <ul class="list-disc list-inside space-y-2 mb-6 bg-muted p-4 rounded-lg">
              <li><strong>Ich möchte</strong> bitte einen Kaffee bestellen. - Я хотел бы заказать кофе.</li>
              <li><strong>Ich mag</strong> Pizza, aber ich <strong class="text-primary">mag keinen</strong> Fisch. - Я люблю пиццу, но не люблю рыбу.</li>
              <li>Haben Sie Wasser? - Ja, aber wir haben <strong class="text-accent">keinen</strong> Saft. - У вас есть вода? - Да, но у нас нет сока.</li>
              <li>Zahlen, bitte! - Счет, пожалуйста!</li>
            </ul>
          `,
          vocabulary: [
             {
              theme: 'Еда и напитки',
              words: [
                { type: 'noun', german: 'Brot', russian: 'хлеб', article: 'das', plural: 'Brote', pluralArticle: 'die', exampleSingular: 'Ich kaufe ein frisches Brot.', examplePlural: 'Es gibt viele Sorten von Broten in Deutschland.' },
                { type: 'noun', german: 'Butter', russian: 'масло', article: 'die', plural: 'Buttersorten', pluralArticle: 'die', exampleSingular: 'Ich esse Brot mit Butter.', examplePlural: 'Im Kühlschrank sind verschiedene Buttersorten.' },
                { type: 'noun', german: 'Käse', russian: 'сыр', article: 'der', plural: 'Käsesorten', pluralArticle: 'die', exampleSingular: 'Zum Frühstück esse ich gern Käse.', examplePlural: 'Der Supermarkt bietet viele Käsesorten an.' },
                { type: 'noun', german: 'Wurst', russian: 'колбаса', article: 'die', plural: 'Würste', pluralArticle: 'die', exampleSingular: 'Ich hätte gern 100 Gramm von dieser Wurst.', examplePlural: 'Deutsche Würste sind weltberühmt.' },
                { type: 'noun', german: 'Fleisch', russian: 'мясо', article: 'das', plural: 'Fleischsorten', pluralArticle: 'die', exampleSingular: 'Ich esse nicht viel Fleisch.', examplePlural: 'In diesem Restaurant gibt es viele Fleischsorten.' },
                { type: 'noun', german: 'Gemüse', russian: 'овощи', article: 'das', plural: 'Gemüse', pluralArticle: 'die', exampleSingular: 'Gemüse ist sehr gesund.', examplePlural: 'Wir kaufen das Gemüse auf dem Markt.' },
                { type: 'noun', german: 'Obst', russian: 'фрукты', article: 'das', plural: 'Obstarten', pluralArticle: 'die', exampleSingular: 'Zum Nachtisch gibt es Obst.', examplePlural: 'Es gibt viele verschiedene Obstarten.' },
                { type: 'noun', german: 'Apfel', russian: 'яблоко', article: 'der', plural: 'Äpfel', pluralArticle: 'die', exampleSingular: 'Ein Apfel am Tag hält den Doktor fern.', examplePlural: 'Ich kaufe ein Kilo Äpfel.' },
                { type: 'noun', german: 'Banane', russian: 'банан', article: 'die', plural: 'Bananen', pluralArticle: 'die', exampleSingular: 'Die Banane ist gelb.', examplePlural: 'Affen essen gern Bananen.' },
                { type: 'noun', german: 'Orange', russian: 'апельсин', article: 'die', plural: 'Orangen', pluralArticle: 'die', exampleSingular: 'Ich trinke gerne Orangensaft.', examplePlural: 'Die Orangen sind sehr saftig.' },
                { type: 'noun', german: 'Tomate', russian: 'помидор', article: 'die', plural: 'Tomaten', pluralArticle: 'die', exampleSingular: 'Die Tomate ist eine Frucht, kein Gemüse.', examplePlural: 'Ich brauche Tomaten für den Salat.' },
                { type: 'noun', german: 'Gurke', russian: 'огурец', article: 'die', plural: 'Gurken', pluralArticle: 'die', exampleSingular: 'Eine Gurke besteht hauptsächlich aus Wasser.', examplePlural: 'Eingelegte Gurken sind eine Spezialität.' },
                { type: 'noun', german: 'Kartoffel', russian: 'картофель', article: 'die', plural: 'Kartoffeln', pluralArticle: 'die', exampleSingular: 'Die Kartoffel ist ein wichtiges Grundnahrungsmittel.', examplePlural: 'Wir machen Pommes aus Kartoffeln.' },
                { type: 'noun', german: 'Zwiebel', russian: 'лук', article: 'die', plural: 'Zwiebeln', pluralArticle: 'die', exampleSingular: 'Beim Schneiden einer Zwiebel muss ich weinen.', examplePlural: 'Für die Soße braucht man Zwiebeln.' },
                { type: 'noun', german: 'Salat', russian: 'салат', article: 'der', plural: 'Salate', pluralArticle: 'die', exampleSingular: 'Ich esse einen frischen Salat.', examplePlural: 'Im Sommer schmecken Salate besonders gut.' },
                { type: 'noun', german: 'Reis', russian: 'рис', article: 'der', plural: 'Reissorten', pluralArticle: 'die', exampleSingular: 'Ich esse gerne Reis mit Hühnchen.', examplePlural: 'Es gibt viele verschiedene Reissorten.' },
                { type: 'noun', german: 'Nudeln', russian: 'лапша, макароны', article: 'die', plural: '(Pluralwort)', pluralArticle: '-', exampleSingular: 'Heute Abend koche ich Nudeln mit Tomatensoße.', examplePlural: 'Heute Abend koche ich Nudeln mit Tomatensoße.' },
                { type: 'noun', german: 'Wasser', russian: 'вода', article: 'das', plural: 'Wässer', pluralArticle: 'die', exampleSingular: 'Ich trinke jeden Tag zwei Liter Wasser.', examplePlural: 'Heilende Wässer kommen aus der Quelle.' },
                { type: 'noun', german: 'Saft', russian: 'сок', article: 'der', plural: 'Säfte', pluralArticle: 'die', exampleSingular: 'Möchtest du einen Apfelsaft?', examplePlural: 'Frische Säfte sind am gesündesten.' },
                { type: 'noun', german: 'Kaffee', russian: 'кофе', article: 'der', plural: 'Kaffees', pluralArticle: 'die', exampleSingular: 'Möchtest du einen Kaffee?', examplePlural: 'Wir bestellen zwei Kaffees.' },
                { type: 'noun', german: 'Tee', russian: 'чай', article: 'der', plural: 'Teesorten', pluralArticle: 'die', exampleSingular: 'Ich trinke lieber Tee als Kaffee.', examplePlural: 'Es gibt viele verschiedene Teesorten.' },
                { type: 'noun', german: 'Bier', russian: 'пиво', article: 'das', plural: 'Biere', pluralArticle: 'die', exampleSingular: 'Ein kühles Bier nach der Arbeit ist herrlich.', examplePlural: 'Deutschland ist berühmt für seine Biere.' },
                { type: 'noun', german: 'Wein', russian: 'вино', article: 'der', plural: 'Weine', pluralArticle: 'die', exampleSingular: 'Zum Abendessen trinken wir ein Glas Wein.', examplePlural: 'Die Weine aus dieser Region sind ausgezeichnet.' },
                { type: 'noun', german: 'Frühstück', russian: 'завтрак', article: 'das', plural: 'Frühstücke', pluralArticle: 'die', exampleSingular: 'Das Frühstück ist die wichtigste Mahlzeit des Tages.', examplePlural: 'Hotel-Frühstücke sind oft sehr reichhaltig.' },
                { type: 'noun', german: 'Mittagessen', russian: 'обед', article: 'das', plural: 'Mittagessen', pluralArticle: 'die', exampleSingular: 'Um 13 Uhr gibt es Mittagessen.', examplePlural: 'Die Mittagessen in der Kantine sind günstig.' },
                { type: 'noun', german: 'Abendessen', russian: 'ужин', article: 'das', plural: 'Abendessen', pluralArticle: 'die', exampleSingular: 'Was gibt es heute zum Abendessen?', examplePlural: 'Wir haben oft kalte Abendessen.' },
              ]
            },
            {
              theme: 'Покупки',
              words: [
                { type: 'noun', german: 'Preis', russian: 'цена', article: 'der', plural: 'Preise', pluralArticle: 'die', exampleSingular: 'Der Preis für das T-Shirt ist gut.', examplePlural: 'Die Preise sind in letzter Zeit gestiegen.' },
                { type: 'noun', german: 'Kasse', russian: 'касса', article: 'die', plural: 'Kassen', pluralArticle: 'die', exampleSingular: 'Bitte gehen Sie zur Kasse drei.', examplePlural: 'An den Kassen gibt es lange Schlangen.' },
                { type: 'noun', german: 'Rabatt', russian: 'скидка', article: 'der', plural: 'Rabatte', pluralArticle: 'die', exampleSingular: 'Gibt es auf diesen Artikel einen Rabatt?', examplePlural: 'Im Schlussverkauf gibt es hohe Rabatte.' },
                { type: 'noun', german: 'Geld', russian: 'деньги', article: 'das', plural: 'Gelder', pluralArticle: 'die', exampleSingular: 'Ich habe nicht genug Geld dabei.', examplePlural: 'Die Gelder für das Projekt wurden genehmigt.' },
                { type: 'noun', german: 'Münze', russian: 'монета', article: 'die', plural: 'Münzen', pluralArticle: 'die', exampleSingular: 'Ich habe nur noch eine Zwei-Euro-Münze.', examplePlural: 'Ich sammle Münzen aus verschiedenen Ländern.' },
                { type: 'noun', german: 'Schein', russian: 'банкнота', article: 'der', plural: 'Scheine', pluralArticle: 'die', exampleSingular: 'Kannst du einen 50-Euro-Schein wechseln?', examplePlural: 'Er hatte nur große Scheine im Portemonnaie.' },
                { type: 'verb', german: 'einkaufen', russian: 'делать покупки', conjugation: 'ich kaufe ein, du kaufst ein, er/sie/es kauft ein', example: 'Samstags kaufe ich für die ganze Woche ein.' },
                { type: 'verb', german: 'bezahlen', russian: 'платить', conjugation: 'ich bezahle, du bezahlst, er/sie/es bezahlt', example: 'Kann ich mit Karte bezahlen?' },
                { type: 'verb', german: 'kaufen', russian: 'покупать', conjugation: 'ich kaufe, du kaufst, er/sie/es kauft', example: 'Ich muss noch Brot kaufen.' },
                { type: 'adjective', german: 'billig', russian: 'дешёвый', comparative: 'billiger', superlative: 'am billigsten', example: 'Diese Schuhe waren sehr billig.' },
                { type: 'adjective', german: 'teuer', russian: 'дорогой', comparative: 'teurer', superlative: 'am teuersten', example: 'Das neue iPhone ist sehr teuer.' },
                { type: 'noun', german: 'Markt', russian: 'рынок', article: 'der', plural: 'Märkte', pluralArticle: 'die', exampleSingular: 'Am Samstag gehe ich auf den Markt.', examplePlural: 'Die Weihnachtsmärkte in Deutschland sind berühmt.' },
                { type: 'noun', german: 'Supermarkt', russian: 'супермаркет', article: 'der', plural: 'Supermärkte', pluralArticle: 'die', exampleSingular: 'Ich gehe in den Supermarkt, um Essen zu kaufen.', examplePlural: 'In meiner Stadt gibt es drei große Supermärkte.' },
              ]
            }
          ],
          exercises: []
        },
        {
          id: 'freizeit-und-termine',
          title: 'Свободное время и встречи',
          explanation: `
            <h2 class="font-headline text-2xl font-bold mb-4">Хобби и интересы</h2>
            <p class="mb-4">Учимся говорить о своих увлечениях и интересах. Здесь нам помогут модальные глаголы.</p>
            <ul class="list-disc list-inside space-y-2 mb-6 bg-muted p-4 rounded-lg">
              <li><strong>Was machst du in deiner Freizeit?</strong> - Что ты делаешь в свободное время?</li>
              <li>Ich <strong class="text-primary">kann</strong> gut schwimmen. - Я умею хорошо плавать.</li>
              <li>Ich <strong class="text-primary">will</strong> am Wochenende ins Kino gehen. - Я хочу пойти в кино на выходных.</li>
              <li>Ich <strong class="text-primary">muss</strong> heute arbeiten. - Я должен сегодня работать.</li>
              <li><strong class="text-primary">Möchtest</strong> du mitkommen? - Хочешь пойти со мной?</li>
            </ul>

            <h3 class="font-headline text-xl font-semibold mt-6 mb-2">Грамматика: Модальные глаголы</h3>
            <p class="mb-4">Модальные глаголы (<strong class="text-primary">können, wollen, müssen, möchten, dürfen, sollen</strong>) изменяют значение основного глагола. В предложении модальный глагол стоит на втором месте и спрягается, а основной глагол уходит в конец в инфинитиве.</p>
            <div class="bg-muted p-3 rounded-lg italic my-4">Ich <strong class="text-accent">kann</strong> heute Abend nicht <strong class="text-primary">kommen</strong>. (Я не могу сегодня вечером прийти.)</div>
            <p class="mb-4">Спряжение у них особенное: в формах <strong>ich</strong> и <strong>er/sie/es</strong> они часто меняют гласную и не имеют окончания.</p>
            <ul class="list-disc list-inside space-y-2 mb-6">
              <li>ich <strong class="text-primary">kann</strong>, du kannst, er/sie/es <strong class="text-primary">kann</strong></li>
              <li>ich <strong class="text-primary">will</strong>, du willst, er/sie/es <strong class="text-primary">will</strong></li>
              <li>ich <strong class="text-primary">muss</strong>, du musst, er/sie/es <strong class="text-primary">muss</strong></li>
            </ul>

            <h2 class="font-headline text-2xl font-bold mb-4">Назначение встреч (Termine)</h2>
            <p class="mb-4">Учимся договариваться о встрече, предлагать, соглашаться и отказываться.</p>
             <ul class="list-disc list-inside space-y-2 mb-6 bg-muted p-4 rounded-lg">
              <li><strong>Hast du am Montag Zeit?</strong> - У тебя есть время в понедельник?</li>
              <li><strong>Wollen wir ins Café gehen?</strong> - Пойдем в кафе?</li>
              <li><strong>Ja, gute Idee! Wann treffen wir uns?</strong> - Да, хорошая идея! Когда встретимся?</li>
              <li><strong>Nein, leider kann ich nicht. Ich habe keine Zeit.</strong> - Нет, к сожалению, я не могу. У меня нет времени.</li>
            </ul>
          `,
          vocabulary: [
             {
              theme: 'Хобби и свободное время',
              words: [
                { type: 'noun', german: 'Hobby', russian: 'хобби', article: 'das', plural: 'Hobbys', pluralArticle: 'die', exampleSingular: 'Mein Hobby ist Fotografieren.', examplePlural: 'Was sind deine Hobbys?' },
                { type: 'verb', german: 'lesen', russian: 'читать', conjugation: 'ich lese, du liest, er/sie/es liest', example: 'Ich lese gerne Bücher.' },
                { type: 'verb', german: 'schwimmen', russian: 'плавать', conjugation: 'ich schwimme, du schwimmst, er/sie/es schwimmt', example: 'Im Sommer schwimme ich oft im Meer.' },
                { type: 'verb', german: 'tanzen', russian: 'танцевать', conjugation: 'ich tanze, du tanzt, er/sie/es tanzt', example: 'Sie tanzt Tango sehr gut.' },
                { type: 'verb', german: 'singen', russian: 'петь', conjugation: 'ich singe, du singst, er/sie/es singt', example: 'Er singt in einem Chor.' },
                { type: 'verb', german: 'spielen', russian: 'играть', conjugation: 'ich spiele, du spielst, er/sie/es spielt', example: 'Die Kinder spielen im Park.' },
                { type: 'verb', german: 'kochen', russian: 'готовить', conjugation: 'ich koche, du kochst, er/sie/es kocht', example: 'Ich koche gerne für meine Freunde.' },
                { type: 'verb', german: 'reisen', russian: 'путешествовать', conjugation: 'ich reise, du reist, er/sie/es reist', example: 'Wir reisen diesen Sommer nach Italien.' },
                { type: 'verb', german: 'fernsehen', russian: 'смотреть телевизор', conjugation: 'ich sehe fern, du siehst fern, er/sie/es sieht fern', example: 'Abends sehe ich oft fern.' },
                { type: 'verb', german: 'Musik hören', russian: 'слушать музыку', conjugation: 'ich höre Musik, du hörst Musik', example: 'Ich höre gern Musik beim Joggen.' },
                { type: 'verb', german: 'Sport machen', russian: 'заниматься спортом', conjugation: 'ich mache Sport, du machst Sport', example: 'Um fit zu bleiben, mache ich dreimal pro Woche Sport.' },
              ]
            },
            {
                theme: 'Профессии',
                words: [
                    { type: 'noun', german: 'Lehrer', russian: 'учитель', article: 'der', plural: 'Lehrer', pluralArticle: 'die', exampleSingular: 'Der Lehrer erklärt die Grammatik.', examplePlural: 'Die Lehrer haben heute eine Konferenz.' },
                    { type: 'noun', german: 'Lehrerin', russian: 'учительница', article: 'die', plural: 'Lehrerinnen', pluralArticle: 'die', exampleSingular: 'Meine Deutschlehrerin ist sehr nett.', examplePlural: 'Viele Lehrerinnen arbeiten Teilzeit.' },
                    { type: 'noun', german: 'Schüler', russian: 'ученик', article: 'der', plural: 'Schüler', pluralArticle: 'die', exampleSingular: 'Der Schüler macht seine Hausaufgaben.', examplePlural: 'Die Schüler der Klasse 5b sind laut.' },
                    { type: 'noun', german: 'Schülerin', russian: 'ученица', article: 'die', plural: 'Schülerinnen', pluralArticle: 'die', exampleSingular: 'Die Schülerin meldet sich.', examplePlural: 'Die Schülerinnen spielen im Schulhof.' },
                    { type: 'noun', german: 'Arzt', russian: 'врач', article: 'der', plural: 'Ärzte', pluralArticle: 'die', exampleSingular: 'Ich muss zum Arzt gehen.', examplePlural: 'Die Ärzte arbeiten im Krankenhaus.' },
                    { type: 'noun', german: 'Ärztin', russian: 'врач (жен.)', article: 'die', plural: 'Ärztinnen', pluralArticle: 'die', exampleSingular: 'Die Ärztin hat mir Medikamente verschrieben.', examplePlural: 'In Deutschland gibt es viele Ärztinnen.' },
                    { type: 'noun', german: 'Fahrer', russian: 'водитель', article: 'der', plural: 'Fahrer', pluralArticle: 'die', exampleSingular: 'Der Taxifahrer wartet schon.', examplePlural: 'Die LKW-Fahrer machen eine Pause.' },
                    { type: 'noun', german: 'Verkäufer', russian: 'продавец', article: 'der', plural: 'Verkäufer', pluralArticle: 'die', exampleSingular: 'Der Verkäufer ist sehr freundlich.', examplePlural: 'Die Verkäufer helfen den Kunden.' },
                    { type: 'noun', german: 'Koch', russian: 'повар', article: 'der', plural: 'Köche', pluralArticle: 'die', exampleSingular: 'Der Koch bereitet das Essen zu.', examplePlural: 'Gute Köche sind Künstler.' },
                    { type: 'noun', german: 'Kellner', russian: 'официант', article: 'der', plural: 'Kellner', pluralArticle: 'die', exampleSingular: 'Der Kellner bringt die Speisekarte.', examplePlural: 'Die Kellner in diesem Restaurant sind schnell.' },
                    { type: 'noun', german: 'Ingenieur', russian: 'инженер', article: 'der', plural: 'Ingenieure', pluralArticle: 'die', exampleSingular: 'Mein Vater ist Ingenieur.', examplePlural: 'Die Ingenieure planen die neue Brücke.' },
                    { type: 'noun', german: 'Mechaniker', russian: 'механик', article: 'der', plural: 'Mechaniker', pluralArticle: 'die', exampleSingular: 'Der Mechaniker repariert mein Auto.', examplePlural: 'Die Mechaniker in dieser Werkstatt sind Profis.' },
                    { type: 'noun', german: 'Arbeiter', russian: 'рабочий', article: 'der', plural: 'Arbeiter', pluralArticle: 'die', exampleSingular: 'Der Arbeiter trägt einen Helm.', examplePlural: 'Die Arbeiter streiken für höhere Löhne.' },
                    { type: 'noun', german: 'Chef', russian: 'начальник', article: 'der', plural: 'Chefs', pluralArticle: 'die', exampleSingular: 'Mein Chef ist heute nicht im Büro.', examplePlural: 'Die Chefs haben eine Besprechung.' },
                    { type: 'noun', german: 'Hausmann', russian: 'домохозяин', article: 'der', plural: 'Hausmänner', pluralArticle: 'die', exampleSingular: 'Er ist Hausmann und kümmert sich um die Kinder.', examplePlural: 'Immer mehr Männer werden Hausmänner.' },
                    { type: 'noun', german: 'Hausfrau', russian: 'домохозяйка', article: 'die', plural: 'Hausfrauen', pluralArticle: 'die', exampleSingular: 'Sie ist Hausfrau und Mutter.', examplePlural: 'Der Alltag von Hausfrauen ist oft anstrengend.' },
                    { type: 'noun', german: 'Student', russian: 'студент', article: 'der', plural: 'Studenten', pluralArticle: 'die', exampleSingular: 'Der Student lernt für die Prüfung.', examplePlural: 'Viele Studenten jobben neben dem Studium.' },
                    { type: 'noun', german: 'Studentin', russian: 'студентка', article: 'die', plural: 'Studentinnen', pluralArticle: 'die', exampleSingular: 'Die Studentin schreibt ihre Masterarbeit.', examplePlural: 'Die Studentinnen demonstrieren für bessere Bildung.' },
                    { type: 'noun', german: 'Elektriker', russian: 'электрик', article: 'der', plural: 'Elektriker', pluralArticle: 'die', exampleSingular: 'Der Elektriker installiert die neuen Lampen.', examplePlural: 'Wir brauchen einen Elektriker.' },
                    { type: 'noun', german: 'Polizist', russian: 'полицейский', article: 'der', plural: 'Polizisten', pluralArticle: 'die', exampleSingular: 'Der Polizist regelt den Verkehr.', examplePlural: 'Die Polizisten sorgen für Sicherheit.' },
                    { type: 'noun', german: 'Friseur', russian: 'парикмахер', article: 'der', plural: 'Friseure', pluralArticle: 'die', exampleSingular: 'Ich gehe heute zum Friseur.', examplePlural: 'Gute Friseure sind oft ausgebucht.' },
                ]
            }
          ],
          exercises: []
        },
        {
          id: 'reisen-und-orientierung',
          title: 'Путешествия и ориентация в городе',
          explanation: `
            <h2 class="font-headline text-2xl font-bold mb-4">Транспорт и билеты</h2>
            <p class="mb-4">Говорим о видах транспорта и покупаем билеты.</p>
            <ul class="list-disc list-inside space-y-2 mb-6 bg-muted p-4 rounded-lg">
              <li><strong>Виды транспорта:</strong> der Zug (поезд), der Bus (автобус), die U-Bahn (метро), die Straßenbahn (трамвай), das Flugzeug (самолет).</li>
              <li><strong>Покупка билета:</strong> Eine Fahrkarte nach Berlin, bitte. (Один билет до Берлина, пожалуйста.)</li>
              <li><strong>Вопросы о расписании:</strong> Wann fährt der nächste Zug? Von welchem Gleis? (Когда отправляется следующий поезд? С какой платформы?)</li>
            </ul>

            <h2 class="font-headline text-2xl font-bold mb-4">Ориентация в городе</h2>
            <p class="mb-4">Учимся спрашивать и объяснять дорогу. Здесь нам нужны предлоги места и падеж <strong class="text-primary">Dativ</strong>.</p>
            <ul class="list-disc list-inside space-y-2 mb-6 bg-muted p-4 rounded-lg">
              <li><strong>Entschuldigung, wie komme ich zum Bahnhof?</strong> - Извините, как мне добраться до вокзала?</li>
              <li>Gehen Sie <strong class="text-accent">geradeaus</strong>. - Идите прямо.</li>
              <li>Dann die erste Straße <strong class="text-accent">links</strong> / <strong class="text-accent">rechts</strong>. - Затем на первой улице налево / направо.</li>
              <li>Der Bahnhof ist <strong class="text-accent">neben</strong> der Post. - Вокзал находится рядом с почтой.</li>
            </ul>
            
            <h3 class="font-headline text-xl font-semibold mt-6 mb-2">Грамматика: Предлоги места с Dativ</h3>
            <p class="mb-4">Когда мы отвечаем на вопрос "Где?" (<strong class="text-primary">Wo?</strong>), предлоги <strong class="text-primary">in, an, auf, neben, vor, hinter, über, unter, zwischen</strong> требуют после себя падеж <strong class="text-primary">Dativ</strong> (Дательный).</p>
            <div class="bg-muted p-3 rounded-lg italic my-4">Das Buch liegt <strong class="text-accent">auf dem</strong> Tisch. (Книга лежит на столе.)</div>
            <p>Артикли в Dativ: der → <strong class="text-primary">dem</strong>, die → <strong class="text-primary">der</strong>, das → <strong class="text-primary">dem</strong>, die (Pl.) → <strong class="text-primary">den (...n)</strong>.</p>

            <h2 class="font-headline text-2xl font-bold mb-4">Говорим о прошлом: Perfekt</h2>
            <p class="mb-4">Чтобы рассказать о прошлом путешествии, используется время Perfekt. Оно образуется с помощью <strong class="text-primary">haben</strong> или <strong class="text-primary">sein</strong> + Partizip II (причастие).</p>
            <ul class="list-disc list-inside space-y-2 mb-6 bg-muted p-4 rounded-lg">
              <li>Ich <strong class="text-accent">habe</strong> einen Kaffee <strong class="text-primary">getrunken</strong>. (Я выпил кофе).</li>
              <li>Wir <strong class="text-accent">sind</strong> nach Berlin <strong class="text-primary">gefahren</strong>. (Мы поехали в Берлин).</li>
            </ul>
            <p>Глагол <strong class="text-primary">sein</strong> используется с глаголами движения (fahren, gehen, fliegen, reisen) и смены состояния (aufstehen).</p>
          `,
          vocabulary: [
             {
              theme: 'Транспорт и направления',
              words: [
                { type: 'noun', german: 'Bus', russian: 'автобус', article: 'der', plural: 'Busse', pluralArticle: 'die', exampleSingular: 'Der Bus kommt in fünf Minuten.', examplePlural: 'In Berlin sind die Busse gelb.' },
                { type: 'noun', german: 'Bahn', russian: 'поезд, железная дорога', article: 'die', plural: 'Bahnen', pluralArticle: 'die', exampleSingular: 'Ich fahre mit der Bahn.', examplePlural: 'Die Bahnen sind heute sehr voll.' },
                { type: 'noun', german: 'Zug', russian: 'поезд', article: 'der', plural: 'Züge', pluralArticle: 'die', exampleSingular: 'Der Zug nach München fährt von Gleis 5 ab.', examplePlural: 'Die Züge der Deutschen Bahn sind oft pünktlich.' },
                { type: 'noun', german: 'U-Bahn', russian: 'метро', article: 'die', plural: 'U-Bahnen', pluralArticle: 'die', exampleSingular: 'Ich nehme die U-Bahn zur Arbeit.', examplePlural: 'Die U-Bahnen fahren alle 5 Minuten.' },
                { type: 'noun', german: 'Straßenbahn', russian: 'трамвай', article: 'die', plural: 'Straßenbahnen', pluralArticle: 'die', exampleSingular: 'Die Straßenbahn ist oft schneller als der Bus.', examplePlural: 'In vielen Städten gibt es moderne Straßenbahnen.' },
                { type: 'noun', german: 'Auto', russian: 'автомобиль', article: 'das', plural: 'Autos', pluralArticle: 'die', exampleSingular: 'Mein Auto ist in der Werkstatt.', examplePlural: 'Am Wochenende sind viele Autos auf der Autobahn.' },
                { type: 'noun', german: 'Fahrrad', russian: 'велосипед', article: 'das', plural: 'Fahrräder', pluralArticle: 'die', exampleSingular: 'Ich fahre mit dem Fahrrad zur Uni.', examplePlural: 'In Amsterdam gibt es mehr Fahrräder als Menschen.' },
                { type: 'noun', german: 'Bahnhof', russian: 'вокзал', article: 'der', plural: 'Bahnhöfe', pluralArticle: 'die', exampleSingular: 'Der Hauptbahnhof ist sehr groß.', examplePlural: 'Große Städte haben oft mehrere Bahnhöfe.' },
                { type: 'noun', german: 'Flughafen', russian: 'аэропорт', article: 'der', plural: 'Flughäfen', pluralArticle: 'die', exampleSingular: 'Wir müssen um 6 Uhr am Flughafen sein.', examplePlural: 'Die größten Flughäfen der Welt sind sehr betriebsam.' },
                { type: 'noun', german: 'Haltestelle', russian: 'остановка', article: 'die', plural: 'Haltestellen', pluralArticle: 'die', exampleSingular: 'Die nächste Haltestelle ist in 200 Metern.', examplePlural: 'Der Bus hält an allen Haltestellen.' },
                { type: 'other', german: 'links', russian: 'налево', example: 'Gehen Sie an der Ampel links.' },
                { type: 'other', german: 'rechts', russian: 'направо', example: 'Die Apotheke ist auf der rechten Seite.' },
                { type: 'other', german: 'geradeaus', russian: 'прямо', example: 'Gehen Sie immer geradeaus.' },
                { type: 'other', german: 'zurück', russian: 'назад', example: 'Wir müssen jetzt zurück zum Hotel.' },
                { type: 'other', german: 'hier', russian: 'здесь', example: 'Ich wohne hier.' },
                { type: 'other', german: 'dort', russian: 'там', example: 'Dort drüben ist das Museum.' },
              ]
            },
            {
                theme: 'Одежда и цвета',
                words: [
                    { type: 'noun', german: 'Hose', russian: 'брюки', article: 'die', plural: 'Hosen', pluralArticle: 'die', exampleSingular: 'Diese Hose passt mir gut.', examplePlural: 'Ich brauche neue Hosen für den Winter.' },
                    { type: 'noun', german: 'Hemd', russian: 'рубашка', article: 'das', plural: 'Hemden', pluralArticle: 'die', exampleSingular: 'Er trägt ein weißes Hemd.', examplePlural: 'Seine Hemden sind immer gebügelt.' },
                    { type: 'noun', german: 'Jacke', russian: 'куртка', article: 'die', plural: 'Jacken', pluralArticle: 'die', exampleSingular: 'Es ist kalt, zieh eine Jacke an.', examplePlural: 'Im Schrank hängen viele Jacken.' },
                    { type: 'noun', german: 'Schuhe', russian: 'обувь', article: 'die', plural: '(Pluralwort)', pluralArticle: '-', exampleSingular: 'Diese Schuhe sind sehr bequem.', examplePlural: 'Diese Schuhe sind sehr bequem.' },
                    { type: 'noun', german: 'Kleid', russian: 'платье', article: 'das', plural: 'Kleider', pluralArticle: 'die', exampleSingular: 'Sie trägt ein schönes Kleid.', examplePlural: 'Im Sommer trägt sie gerne Kleider.' },
                    { type: 'noun', german: 'Rock', russian: 'юбка', article: 'der', plural: 'Röcke', pluralArticle: 'die', exampleSingular: 'Der Rock ist zu kurz.', examplePlural: 'Sie hat viele bunte Röcke.' },
                    { type: 'noun', german: 'Pullover', russian: 'свитер', article: 'der', plural: 'Pullover', pluralArticle: 'die', exampleSingular: 'Mein Pullover ist aus Wolle.', examplePlural: 'Im Winter trage ich dicke Pullover.' },
                    { type: 'noun', german: 'T-Shirt', russian: 'футболка', article: 'das', plural: 'T-Shirts', pluralArticle: 'die', exampleSingular: 'Ich trage ein T-Shirt mit einem coolen Aufdruck.', examplePlural: 'Im Urlaub brauche ich viele T-Shirts.' },
                    { type: 'noun', german: 'Mantel', russian: 'пальто', article: 'der', plural: 'Mäntel', pluralArticle: 'die', exampleSingular: 'Zieh deinen Mantel an, es ist kalt.', examplePlural: 'Die Mäntel hängen an der Garderobe.' },
                    { type: 'noun', german: 'Socken', russian: 'носки', article: 'die', plural: '(Pluralwort)', pluralArticle: '-', exampleSingular: 'Meine Socken sind nass.', examplePlural: 'Meine Socken sind nass.' },
                    { type: 'noun', german: 'Schal', russian: 'шарф', article: 'der', plural: 'Schals', pluralArticle: 'die', exampleSingular: 'Ich trage einen warmen Schal.', examplePlural: 'Im Winter sind Schals sehr beliebt.' },
                    { type: 'noun', german: 'Mütze', russian: 'шапка', article: 'die', plural: 'Mützen', pluralArticle: 'die', exampleSingular: 'Vergiss deine Mütze nicht!', examplePlural: 'Ich habe viele verschiedene Mützen.' },
                    { type: 'adjective', german: 'rot', russian: 'красный', comparative: 'röter', superlative: 'am rötesten', example: 'Das Auto ist rot.' },
                    { type: 'adjective', german: 'blau', russian: 'синий', comparative: 'blauer', superlative: 'am blauesten', example: 'Der Himmel ist heute blau.' },
                    { type: 'adjective', german: 'gelb', russian: 'жёлтый', comparative: 'gelber', superlative: 'am gelbsten', example: 'Die Banane ist gelb.' },
                    { type: 'adjective', german: 'grün', russian: 'зелёный', comparative: 'grüner', superlative: 'am grünsten', example: 'Das Gras ist grün.' },
                    { type: 'adjective', german: 'weiß', russian: 'белый', comparative: 'weißer', superlative: 'am weißesten', example: 'Der Schnee ist weiß.' },
                    { type: 'adjective', german: 'schwarz', russian: 'чёрный', comparative: 'schwärzer', superlative: 'am schwärzesten', example: 'Die Nacht ist schwarz.' },
                    { type: 'adjective', german: 'grau', russian: 'серый', comparative: 'grauer', superlative: 'am grauesten', example: 'Der Himmel ist heute grau.' },
                    { type: 'adjective', german: 'braun', russian: 'коричневый', comparative: 'brauner', superlative: 'am braunsten', example: 'Ihre Haare sind braun.' },
                    { type: 'adjective', german: 'orange', russian: 'оранжевый', comparative: 'oranger', superlative: 'am orangesten', example: 'Das T-Shirt ist orange.' },
                ]
            },
            {
                theme: 'Погода',
                words: [
                    { type: 'noun', german: 'Sonne', russian: 'солнце', article: 'die', plural: 'Sonnen', pluralArticle: 'die', exampleSingular: 'Die Sonne scheint.', examplePlural: 'Es gibt Milliarden von Sonnen im Universum.' },
                    { type: 'noun', german: 'Regen', russian: 'дождь', article: 'der', plural: 'Regen', pluralArticle: 'die', exampleSingular: 'Ich mag den Geruch von Regen.', examplePlural: 'Starke Regen verursachen Überschwemmungen.' },
                    { type: 'noun', german: 'Schnee', russian: 'снег', article: 'der', plural: '-', pluralArticle: '-', exampleSingular: 'Im Winter liegt hier viel Schnee.', examplePlural: '-' },
                    { type: 'noun', german: 'Wind', russian: 'ветер', article: 'der', plural: 'Winde', pluralArticle: 'die', exampleSingular: 'Der Wind ist heute sehr stark.', examplePlural: 'Die Winde wehen aus Westen.' },
                    { type: 'adjective', german: 'warm', russian: 'тёплый', comparative: 'wärmer', superlative: 'am wärmsten', example: 'Heute ist es angenehm warm.' },
                    { type: 'adjective', german: 'kalt', russian: 'холодный', comparative: 'kälter', superlative: 'am kältesten', example: 'Zieh dich warm an, es ist kalt draußen.' },
                    { type: 'adjective', german: 'heiß', russian: 'жаркий', comparative: 'heißer', superlative: 'am heißesten', example: 'Im Sommer kann es sehr heiß werden.' },
                    { type: 'adjective', german: 'schön', russian: 'красивый, хороший', comparative: 'schöner', superlative: 'am schönsten', example: 'Das Wetter ist heute schön.' },
                    { type: 'adjective', german: 'schlecht', russian: 'плохой', comparative: 'schlechter', superlative: 'am schlechtesten', example: 'Bei schlechtem Wetter bleibe ich zu Hause.' },
                ]
            },
            {
                theme: 'Основные глаголы',
                words: [
                    { type: 'verb', german: 'sein', russian: 'быть', conjugation: 'ich bin, du bist, er ist', example: 'Ich bin müde.' },
                    { type: 'verb', german: 'haben', russian: 'иметь', conjugation: 'ich habe, du hast, er hat', example: 'Ich habe eine Frage.' },
                    { type: 'verb', german: 'machen', russian: 'делать', conjugation: 'ich mache, du machst', example: 'Was machst du am Wochenende?' },
                    { type: 'verb', german: 'gehen', russian: 'идти', conjugation: 'ich gehe, du gehst', example: 'Ich gehe ins Kino.' },
                    { type: 'verb', german: 'kommen', russian: 'приходить', conjugation: 'ich komme, du kommst', example: 'Kommst du mit?' },
                    { type: 'verb', german: 'wohnen', russian: 'жить', conjugation: 'ich wohne, du wohnst', example: 'Ich wohne in Berlin.' },
                    { type: 'verb', german: 'heißen', russian: 'называться', conjugation: 'ich heiße, du heißt', example: 'Wie heißt du?' },
                    { type: 'verb', german: 'arbeiten', russian: 'работать', conjugation: 'ich arbeite, du arbeitest', example: 'Ich arbeite als Programmierer.' },
                    { type: 'verb', german: 'lernen', russian: 'учить', conjugation: 'ich lerne, du lernst', example: 'Ich lerne Deutsch.' },
                    { type: 'verb', german: 'sprechen', russian: 'говорить', conjugation: 'ich spreche, du sprichst', example: 'Sprichst du Englisch?' },
                    { type: 'verb', german: 'schreiben', russian: 'писать', conjugation: 'ich schreibe, du schreibst', example: 'Ich schreibe eine E-Mail.' },
                    { type: 'verb', german: 'hören', russian: 'слышать, слушать', conjugation: 'ich höre, du hörst', example: 'Ich höre gerne Musik.' },
                    { type: 'verb', german: 'sehen', russian: 'видеть', conjugation: 'ich sehe, du siehst', example: 'Ich sehe einen Film.' },
                    { type: 'verb', german: 'fahren', russian: 'ехать', conjugation: 'ich fahre, du fährst', example: 'Ich fahre mit dem Auto.' },
                    { type: 'verb', german: 'essen', russian: 'есть', conjugation: 'ich esse, du isst', example: 'Ich esse eine Pizza.' },
                    { type: 'verb', german: 'trinken', russian: 'пить', conjugation: 'ich trinke, du trinkst', example: 'Ich trinke einen Kaffee.' },
                    { type: 'verb', german: 'finden', russian: 'находить', conjugation: 'ich finde, du findest', example: 'Ich finde meine Schlüssel nicht.' },
                    { type: 'verb', german: 'nehmen', russian: 'брать', conjugation: 'ich nehme, du nimmst', example: 'Ich nehme den Bus.' },
                    { type: 'verb', german: 'geben', russian: 'давать', conjugation: 'ich gebe, du gibst', example: 'Gib mir bitte das Buch.' },
                    { type: 'verb', german: 'bringen', russian: 'приносить', conjugation: 'ich bringe, du bringst', example: 'Ich bringe dir einen Kaffee.' },
                    { type: 'verb', german: 'denken', russian: 'думать', conjugation: 'ich denke, du denkst', example: 'Ich denke an dich.' },
                    { type: 'verb', german: 'fragen', russian: 'спрашивать', conjugation: 'ich frage, du fragst', example: 'Ich frage den Lehrer.' },
                    { type: 'verb', german: 'antworten', russian: 'отвечать', conjugation: 'ich antworte, du antwortest', example: 'Antworte mir bitte.' },
                    { type: 'verb', german: 'stehen', russian: 'стоять', conjugation: 'ich stehe, du stehst', example: 'Das Auto steht vor dem Haus.' },
                    { type: 'verb', german: 'sitzen', russian: 'сидеть', conjugation: 'ich sitze, du sitzt', example: 'Wir sitzen im Café.' },
                    { type: 'verb', german: 'liegen', russian: 'лежать', conjugation: 'ich liege, du liegst', example: 'Das Buch liegt auf dem Tisch.' },
                    { type: 'verb', german: 'schlafen', russian: 'спать', conjugation: 'ich schlafe, du schläfst', example: 'Ich schlafe acht Stunden.' },
                    { type: 'verb', german: 'aufstehen', russian: 'вставать', conjugation: 'ich stehe auf, du stehst auf', example: 'Ich stehe um 7 Uhr auf.' },
                    { type: 'verb', german: 'ausgehen', russian: 'выходить (гулять)', conjugation: 'ich gehe aus, du gehst aus', example: 'Am Freitag gehe ich mit Freunden aus.' },
                    { type: 'verb', german: 'mitkommen', russian: 'идти с кем-то', conjugation: 'ich komme mit, du kommst mit', example: 'Ich gehe ins Kino, kommst du mit?' },
                    { type: 'verb', german: 'aufmachen', russian: 'открывать', conjugation: 'ich mache auf, du machst auf', example: 'Mach bitte das Fenster auf.' },
                    { type: 'verb', german: 'zumachen', russian: 'закрывать', conjugation: 'ich mache zu, du machst zu', example: 'Mach bitte die Tür zu.' },
                ]
            },
            {
                theme: 'Прилагательные и наречия',
                words: [
                    { type: 'adjective', german: 'gut', russian: 'хороший', comparative: 'besser', superlative: 'am besten', example: 'Das Essen ist gut.' },
                    { type: 'adjective', german: 'schlecht', russian: 'плохой', comparative: 'schlechter', superlative: 'am schlechtesten', example: 'Das Wetter ist schlecht.' },
                    { type: 'adjective', german: 'schön', russian: 'красивый', comparative: 'schöner', superlative: 'am schönsten', example: 'Sie hat ein schönes Lächeln.' },
                    { type: 'adjective', german: 'hässlich', russian: 'некрасивый', comparative: 'hässlicher', superlative: 'am hässlichsten', example: 'Das Gebäude ist alt und hässlich.' },
                    { type: 'adjective', german: 'groß', russian: 'большой, высокий', comparative: 'größer', superlative: 'am größten', example: 'Berlin ist eine große Stadt.' },
                    { type: 'adjective', german: 'klein', russian: 'маленький, низкий', comparative: 'kleiner', superlative: 'am kleinsten', example: 'Das ist ein kleines Problem.' },
                    { type: 'adjective', german: 'jung', russian: 'молодой', comparative: 'jünger', superlative: 'am jüngsten', example: 'Mein Bruder ist jünger als ich.' },
                    { type: 'adjective', german: 'alt', russian: 'старый', comparative: 'älter', superlative: 'am ältesten', example: 'Mein Opa ist sehr alt.' },
                    { type: 'adjective', german: 'neu', russian: 'новый', comparative: 'neuer', superlative: 'am neuesten', example: 'Ich habe ein neues Handy.' },
                    { type: 'adjective', german: 'kaputt', russian: 'сломанный', comparative: 'kaputter', superlative: 'am kaputtesten', example: 'Mein Fahrrad ist kaputt.' },
                    { type: 'adjective', german: 'interessant', russian: 'интересный', comparative: 'interessanter', superlative: 'am interessantesten', example: 'Das Buch ist sehr interessant.' },
                    { type: 'adjective', german: 'langsam', russian: 'медленный', comparative: 'langsamer', superlative: 'am langsamsten', example: 'Die Schnecke ist sehr langsam.' },
                    { type: 'adjective', german: 'schnell', russian: 'быстрый', comparative: 'schneller', superlative: 'am schnellsten', example: 'Das Auto fährt schnell.' },
                    { type: 'adjective', german: 'ruhig', russian: 'тихий, спокойный', comparative: 'ruhiger', superlative: 'am ruhigsten', example: 'Hier ist es sehr ruhig.' },
                    { type: 'adjective', german: 'laut', russian: 'громкий', comparative: 'lauter', superlative: 'am lautesten', example: 'Die Musik ist zu laut.' },
                    { type: 'other', german: 'gern', russian: 'охотно', example: 'Ich trinke gern Kaffee.' },
                    { type: 'other', german: 'sehr', russian: 'очень', example: 'Das ist sehr gut.' },
                    { type: 'other', german: 'nicht', russian: 'не', example: 'Ich verstehe das nicht.' },
                    { type: 'other', german: 'nie', russian: 'никогда', example: 'Ich war noch nie in Japan.' },
                    { type: 'other', german: 'immer', russian: 'всегда', example: 'Er ist immer pünktlich.' },
                    { type: 'other', german: 'oft', russian: 'часто', example: 'Ich gehe oft ins Kino.' },
                    { type: 'other', german: 'manchmal', russian: 'иногда', example: 'Manchmal esse ich Pizza.' },
                    { type: 'other', german: 'schon', russian: 'уже', example: 'Ich habe schon gegessen.' },
                    { type: 'other', german: 'noch', russian: 'ещё', example: 'Ich habe noch Hunger.' },
                ]
            }
          ],
          exercises: []
        }
      ]
    },
    { 
      id: 'a2', 
      title: 'Уровень A2: Элементарный',
      description: 'Расширяем словарный запас и грамматику. Вы научитесь говорить о прошлом, делать покупки, договариваться о встречах и лучше понимать собеседников.', 
      topics: [
        {
          id: 'biografie-und-vergangenheit',
          title: 'Биография и прошлое',
          explanation: `
            <h2 class="font-headline text-2xl font-bold mb-4">Прошедшее время Perfekt</h2>
            <p class="mb-4">Perfekt — основное время для рассказа о прошлом в устной речи. Оно состоит из двух частей: вспомогательного глагола <strong class="text-primary">haben</strong> или <strong class="text-primary">sein</strong> на втором месте и <strong class="text-accent">Partizip II</strong> (причастия) в конце предложения.</p>
            <ul class="list-disc list-inside space-y-2 mb-6 bg-muted p-4 rounded-lg">
              <li>С <strong class="text-primary">sein</strong>: глаголы движения (gehen, fahren, kommen) и смены состояния (einschlafen, aufwachen). <em>Пример: Ich <strong class="text-primary">bin</strong> gestern ins Kino <strong class="text-accent">gegangen</strong>.</em></li>
              <li>С <strong class="text-primary">haben</strong>: все остальные глаголы (machen, lesen, arbeiten). <em>Пример: Ich <strong class="text-primary">habe</strong> ein Buch <strong class="text-accent">gelesen</strong>.</em></li>
            </ul>

            <h2 class="font-headline text-2xl font-bold mb-4">Прошедшее время Präteritum</h2>
            <p class="mb-4">Для глаголов <strong class="text-primary">haben</strong>, <strong class="text-primary">sein</strong> и <strong class="text-accent">модальных глаголов</strong> в разговоре о прошлом чаще используется Präteritum. Это их простые формы, которые нужно запомнить.</p>
            <ul class="list-disc list-inside space-y-2 mb-6 bg-muted p-4 rounded-lg">
              <li>sein: Ich <strong class="text-primary">war</strong>, du <strong class="text-primary">warst</strong>, er/sie/es <strong class="text-primary">war</strong>, wir <strong class="text-primary">waren</strong>, ihr <strong class="text-primary">wart</strong>, sie/Sie <strong class="text-primary">waren</strong>.</li>
              <li>haben: Ich <strong class="text-primary">hatte</strong>, du <strong class="text-primary">hattest</strong>, er/sie/es <strong class="text-primary">hatte</strong>, wir <strong class="text-primary">hatten</strong>, ihr <strong class="text-primary">hattet</strong>, sie/Sie <strong class="text-primary">hatten</strong>.</li>
              <li>können: Ich <strong class="text-primary">konnte</strong>, du <strong class="text-primary">konntest</strong>, ...</li>
              <li>wollen: Ich <strong class="text-primary">wollte</strong>, du <strong class="text-primary">wolltest</strong>, ...</li>
            </ul>
            <p>Пример: Gestern <strong class="text-primary">hatte</strong> ich keine Zeit. Ich <strong class="text-primary">war</strong> zu Hause. Ich <strong class="text-primary">wollte</strong> lesen, aber ich <strong class="text-primary">konnte</strong> nicht.</p>
          `,
          vocabulary: [
            {
              theme: 'Личная жизнь, отношения и обучение',
              words: [
                { type: 'noun', german: 'Geburtstag', russian: 'день рождения', article: 'der', plural: 'Geburtstage', pluralArticle: 'die', exampleSingular: 'Wann ist dein Geburtstag?', examplePlural: 'Wir feiern Geburtstage immer groß.' },
                { type: 'noun', german: 'Nationalität', russian: 'национальность', article: 'die', plural: 'Nationalitäten', pluralArticle: 'die', exampleSingular: 'Welche Nationalität haben Sie?', examplePlural: 'In Berlin leben Menschen vieler Nationalitäten.' },
                { type: 'adjective', german: 'verheiratet', russian: 'женатый / замужняя', comparative: '-', superlative: '-', example: 'Ich bin seit fünf Jahren verheiratet.' },
                { type: 'adjective', german: 'ledig', russian: 'неженатый / незамужняя', comparative: '-', superlative: '-', example: 'Mein Bruder ist noch ledig.' },
                { type: 'adjective', german: 'geschieden', russian: 'разведен', comparative: '-', superlative: '-', example: 'Meine Eltern sind geschieden.' },
                { type: 'noun', german: 'Leben', russian: 'жизнь', article: 'das', plural: 'Leben', pluralArticle: 'die', exampleSingular: 'Das Leben in der Stadt ist teuer.', examplePlural: 'Die Leben der Stars sind oft öffentlich.' },
                { type: 'noun', german: 'Alltag', russian: 'повседневная жизнь', article: 'der', plural: 'Alltage', pluralArticle: 'die', exampleSingular: 'Mein Alltag ist oft stressig.', examplePlural: 'Die Alltage der Menschen sind sehr unterschiedlich.' },
                { type: 'noun', german: 'Erfahrung', russian: 'опыт', article: 'die', plural: 'Erfahrungen', pluralArticle: 'die', exampleSingular: 'Ich habe viel Erfahrung in diesem Bereich.', examplePlural: 'Reisen bringt viele neue Erfahrungen.' },
                { type: 'noun', german: 'Gewohnheit', russian: 'привычка', article: 'die', plural: 'Gewohnheiten', pluralArticle: 'die', exampleSingular: 'Rauchen ist eine schlechte Gewohnheit.', examplePlural: 'Alte Gewohnheiten kann man schwer ändern.' },
                { type: 'noun', german: 'Partner', russian: 'партнер', article: 'der', plural: 'Partner', pluralArticle: 'die', exampleSingular: 'Mein Partner und ich wohnen zusammen.', examplePlural: 'Die Partner arbeiten gut im Team.' },
                { type: 'noun', german: 'Partnerschaft', russian: 'партнерство', article: 'die', plural: 'Partnerschaften', pluralArticle: 'die', exampleSingular: 'Eine gute Partnerschaft braucht viel Arbeit.', examplePlural: 'Es gibt verschiedene Arten von Partnerschaften.' },
                { type: 'noun', german: 'Bekannte', russian: 'знакомый/знакомая', article: 'der/die', plural: 'Bekannten', pluralArticle: 'die', exampleSingular: 'Ein Bekannter hat mir geholfen.', examplePlural: 'Ich habe viele Bekannte in der Stadt.' },
                { type: 'noun', german: 'Schwager', russian: 'шурин, зять', article: 'der', plural: 'Schwäger', pluralArticle: 'die', exampleSingular: 'Mein Schwager kommt am Wochenende zu Besuch.', examplePlural: 'Meine beiden Schwäger verstehen sich gut.' },
                { type: 'noun', german: 'Schwägerin', russian: 'невестка, золовка', article: 'die', plural: 'Schwägerinnen', pluralArticle: 'die', exampleSingular: 'Meine Schwägerin ist sehr nett.', examplePlural: 'Ich habe zwei Schwägerinnen.' },
                { type: 'noun', german: 'Schwiegermutter', russian: 'теща, свекровь', article: 'die', plural: 'Schwiegermütter', pluralArticle: 'die', exampleSingular: 'Ich besuche meine Schwiegermutter.', examplePlural: 'Alle Schwiegermütter lieben ihre Enkel.' },
                { type: 'noun', german: 'Schwiegervater', russian: 'тесть, свекор', article: 'der', plural: 'Schwiegerväter', pluralArticle: 'die', exampleSingular: 'Mein Schwiegervater ist Rentner.', examplePlural: 'Die Schwiegerväter spielen Karten.' },
                { type: 'noun', german: 'Enkelin', russian: 'внучка', article: 'die', plural: 'Enkelinnen', pluralArticle: 'die', exampleSingular: 'Meine Enkelin ist 5 Jahre alt.', examplePlural: 'Die Großeltern spielen mit ihren Enkelinnen.' },
                { type: 'noun', german: 'Enkel', russian: 'внук', article: 'der', plural: 'Enkel', pluralArticle: 'die', exampleSingular: 'Der Enkel besucht seine Großeltern.', examplePlural: 'Der Opa ist stolz auf seine Enkel.' },
                { type: 'noun', german: 'Schule', russian: 'школа', article: 'die', plural: 'Schulen', pluralArticle: 'die', exampleSingular: 'Die Kinder gehen in die Schule.', examplePlural: 'In Deutschland gibt es verschiedene Schulsysteme.' },
                { type: 'verb', german: 'lernen', russian: 'учить(ся)', conjugation: 'ich lerne, du lernst, er lernt', example: 'Ich muss für die Prüfung lernen.' },
                { type: 'verb', german: 'unterrichten', russian: 'преподавать', conjugation: 'ich unterrichte, du unterrichtest', example: 'Frau Meier unterrichtet Deutsch.' },
                { type: 'noun', german: 'Aufgabe', russian: 'задание', article: 'die', plural: 'Aufgaben', pluralArticle: 'die', exampleSingular: 'Die Hausaufgabe war sehr schwer.', examplePlural: 'Wir haben viele Aufgaben zu erledigen.' },
                { type: 'noun', german: 'Prüfung', russian: 'экзамен', article: 'die', plural: 'Prüfungen', pluralArticle: 'die', exampleSingular: 'Morgen habe ich eine wichtige Prüfung.', examplePlural: 'Die Prüfungen finden im Juni statt.' },
                { type: 'verb', german: 'bestehen', russian: 'сдавать (экзамен)', conjugation: 'ich bestehe, du bestehst', example: 'Ich hoffe, ich bestehe die Prüfung.' },
                { type: 'verb', german: 'wiederholen', russian: 'повторять', conjugation: 'ich wiederhole, du wiederholst', example: 'Können Sie das bitte wiederholen?' },
                { type: 'noun', german: 'Beruf', russian: 'профессия', article: 'der', plural: 'Berufe', pluralArticle: 'die', exampleSingular: 'Was ist Ihr Beruf?', examplePlural: 'Es gibt viele kreative Berufe.' },
                { type: 'verb', german: 'arbeiten', russian: 'работать', conjugation: 'ich arbeite, du arbeitest', example: 'Ich arbeite als Ingenieur.' },
                { type: 'noun', german: 'Firma', russian: 'компания', article: 'die', plural: 'Firmen', pluralArticle: 'die', exampleSingular: 'Er arbeitet bei einer großen Firma.', examplePlural: 'Viele deutsche Firmen sind international tätig.' },
                { type: 'noun', german: 'Büro', russian: 'офис', article: 'das', plural: 'Büros', pluralArticle: 'die', exampleSingular: 'Ich fahre jeden Tag ins Büro.', examplePlural: 'Moderne Büros sind oft offen gestaltet.' },
                { type: 'noun', german: 'Arbeitszeit', russian: 'рабочее время', article: 'die', plural: 'Arbeitszeiten', pluralArticle: 'die', exampleSingular: 'Meine Arbeitszeit ist von 9 bis 17 Uhr.', examplePlural: 'Flexible Arbeitszeiten werden immer beliebter.' },
                { type: 'verb', german: 'verdienen', russian: 'зарабатывать', conjugation: 'ich verdiene, du verdienst', example: 'Wie viel kann man in diesem Beruf verdienen?' },
                { type: 'verb', german: 'einladen', russian: 'приглашать', conjugation: 'ich lade ein, du lädst ein, er lädt ein', example: 'Ich lade dich zu meinem Geburtstag ein.' },
                { type: 'verb', german: 'feiern', russian: 'праздновать', conjugation: 'ich feiere, du feierst, er feiert', example: 'Wir feiern eine große Party.' },
                { type: 'verb', german: 'erzählen', russian: 'рассказывать', conjugation: 'ich erzähle, du erzählst, er erzählt', example: 'Erzähl mir eine Geschichte!' },
                { type: 'verb', german: 'verstehen', russian: 'понимать', conjugation: 'ich verstehe, du verstehst, er versteht', example: 'Ich verstehe die Frage nicht.' },
                { type: 'verb', german: 'erklären', russian: 'объяснять', conjugation: 'ich erkläre, du erklärst, er erklärt', example: 'Kannst du mir das erklären?' },
                { type: 'verb', german: 'zeigen', russian: 'показывать', conjugation: 'ich zeige, du zeigst, er zeigt', example: 'Ich zeige dir die Stadt.' },
                { type: 'verb', german: 'anfangen', russian: 'начинать', conjugation: 'ich fange an, du fängst an, er fängt an', example: 'Der Film fängt um 20 Uhr an.' },
                { type: 'verb', german: 'aufhören', russian: 'заканчивать', conjugation: 'ich höre auf, du hörst auf, er hört auf', example: 'Ich höre auf zu rauchen.' },
                { type: 'verb', german: 'suchen', russian: 'искать', conjugation: 'ich suche, du suchst, er sucht', example: 'Was suchst du?' },
                { type: 'verb', german: 'finden', russian: 'находить', conjugation: 'ich finde, du findest, er findet', example: 'Ich kann meine Schlüssel nicht finden.' },
                { type: 'verb', german: 'helfen', russian: 'помогать', conjugation: 'ich helfe, du hilfst, er hilft', example: 'Kannst du mir helfen?' },
                { type: 'verb', german: 'warten', russian: 'ждать', conjugation: 'ich warte, du wartest, er wartet', example: 'Ich warte auf den Bus.' },
                { type: 'verb', german: 'vergessen', russian: 'забывать', conjugation: 'ich vergesse, du vergisst, er vergisst', example: 'Ich habe seinen Namen vergessen.' },
                { type: 'verb', german: 'erinnern', russian: 'помнить, вспоминать', conjugation: 'ich erinnere mich, du erinnerst dich', example: 'Ich erinnere mich nicht an den Film.' },
              ]
            }
          ],
          exercises: []
        },
        {
          id: 'wohnen-und-dienstleistungen',
          title: 'Жильё и услуги',
          explanation: `
            <h2 class="font-headline text-2xl font-bold mb-4">Предлоги места с Dativ и Akkusativ (Wechselpräpositionen)</h2>
            <p class="mb-4">Предлоги <strong class="text-primary">in, an, auf, neben, über, unter, vor, hinter, zwischen</strong> могут использоваться с двумя падежами:</p>
            <ul class="list-disc list-inside space-y-2 mb-6 bg-muted p-4 rounded-lg">
              <li>С падежом <strong class="text-accent">Dativ</strong>, если отвечают на вопрос <strong class="text-primary">Wo?</strong> (где?) и обозначают местоположение. <em>Пример: Das Buch liegt <strong class="text-accent">auf dem</strong> Tisch.</em></li>
              <li>С падежом <strong class="text-accent">Akkusativ</strong>, если отвечают на вопрос <strong class="text-primary">Wohin?</strong> (куда?) и обозначают направление. <em>Пример: Ich lege das Buch <strong class="text-accent">auf den</strong> Tisch.</em></li>
            </ul>

            <h2 class="font-headline text-2xl font-bold mb-4">Описание жилья и бытовых проблем</h2>
            <p class="mb-4">Для описания квартиры и проблем (например, в разговоре с арендодателем) используются прилагательные и специализированная лексика. Для сравнения используются степени сравнения.</p>
             <h3 class="font-headline text-xl font-semibold mt-6 mb-2">Степени сравнения (Komparativ und Superlativ)</h3>
            <ul class="list-disc list-inside space-y-2">
              <li><strong>Komparativ (сравнительная):</strong> <strong class="text-accent">schnell<span class="text-primary">er</span></span></strong> (быстрее), <strong class="text-accent">größ<span class="text-primary">er</span></span></strong> (больше). Используется с <strong class="text-primary">als</strong> (чем). <em>Meine Wohnung ist <strong class="text-accent">größer als</strong> deine.</em></li>
              <li><strong>Superlativ (превосходная):</strong> <strong class="text-accent">am</span> schnell<span class="text-primary">sten</span></strong> (самый быстрый), <strong class="text-accent">der/die/das</span> größ<span class="text-primary">te</span></strong> (самый большой). <em>Er ist <strong class="text-accent">am schnellsten</span>. Das ist <strong class="text-accent">das größte</strong> Haus.</em></li>
              <li><strong>Исключения:</strong> gut - besser - am besten; viel - mehr - am meisten; gern - lieber - am liebsten.</li>
            </ul>
          `,
          vocabulary: [
            {
              theme: 'Аренда, быт и еда',
              words: [
                { type: 'noun', german: 'Vermieter', russian: 'арендодатель', article: 'der', plural: 'Vermieter', pluralArticle: 'die', exampleSingular: 'Ich muss meinen Vermieter anrufen.', examplePlural: 'Die Vermieter sind für Reparaturen verantwortlich.' },
                { type: 'noun', german: 'Miete', russian: 'арендная плата', article: 'die', plural: 'Mieten', pluralArticle: 'die', exampleSingular: 'Die Miete ist sehr hoch.', examplePlural: 'Die Mieten in der Stadt steigen.' },
                { type: 'noun', german: 'Nebenkosten', russian: 'коммунальные услуги', article: 'die', plural: '(Pluralwort)', pluralArticle: '-', exampleSingular: 'Die Nebenkosten sind in der Miete nicht enthalten.', examplePlural: 'Die Nebenkosten sind in der Miete nicht enthalten.' },
                { type: 'noun', german: 'Heizung', russian: 'отопление', article: 'die', plural: 'Heizungen', pluralArticle: 'die', exampleSingular: 'Die Heizung funktioniert nicht.', examplePlural: 'Moderne Heizungen sind effizient.' },
                { type: 'noun', german: 'Toilette', russian: 'туалет', article: 'die', plural: 'Toiletten', pluralArticle: 'die', exampleSingular: 'Wo ist die Toilette, bitte?', examplePlural: 'Öffentliche Toiletten sind oft nicht sauber.' },
                { type: 'noun', german: 'Aufzug', russian: 'лифт', article: 'der', plural: 'Aufzüge', pluralArticle: 'die', exampleSingular: 'Der Aufzug ist leider kaputt.', examplePlural: 'In Hochhäusern gibt es mehrere Aufzüge.' },
                { type: 'noun', german: 'Keller', russian: 'подвал', article: 'der', plural: 'Keller', pluralArticle: 'die', exampleSingular: 'Die Waschmaschine steht im Keller.', examplePlural: 'Viele Häuser haben einen Keller.' },
                { type: 'noun', german: 'Möbel', russian: 'мебель', article: 'das', plural: '(Pluralwort)', pluralArticle: '-', exampleSingular: 'Dieses Möbelstück ist ein Erbstück.', examplePlural: 'Wir brauchen neue Möbel für das Wohnzimmer.' },
                { type: 'noun', german: 'Schreibtisch', russian: 'письменный стол', article: 'der', plural: 'Schreibtische', pluralArticle: 'die', exampleSingular: 'Mein Schreibtisch ist immer aufgeräumt.', examplePlural: 'Für das Büro benötigen wir zehn Schreibtische.' },
                { type: 'noun', german: 'Regal', russian: 'полка', article: 'das', plural: 'Regale', pluralArticle: 'die', exampleSingular: 'Das Buch steht im Regal.', examplePlural: 'Die Regale sind voller Bücher.' },
                { type: 'noun', german: 'Geschäft', russian: 'магазин', article: 'das', plural: 'Geschäfte', pluralArticle: 'die', exampleSingular: 'Ich gehe kurz ins Geschäft.', examplePlural: 'Die Geschäfte schließen um 20 Uhr.' },
                { type: 'noun', german: 'Kaufhaus', russian: 'универмаг', article: 'das', plural: 'Kaufhäuser', pluralArticle: 'die', exampleSingular: 'Im Kaufhaus findet man alles.', examplePlural: 'Große Kaufhäuser haben oft mehrere Etagen.' },
                { type: 'noun', german: 'Angebot', russian: 'предложение, акция', article: 'das', plural: 'Angebote', pluralArticle: 'die', exampleSingular: 'Diese Woche ist Kaffee im Angebot.', examplePlural: 'Ich vergleiche immer die Angebote.' },
                { type: 'verb', german: 'zurückgeben', russian: 'возвращать', conjugation: 'ich gebe zurück, du gibst zurück', example: 'Ich möchte diese Jacke zurückgeben.' },
                { type: 'verb', german: 'wechseln', russian: 'менять', conjugation: 'ich wechsle, du wechselst', example: 'Kann ich diesen Pullover in einer anderen Größe wechseln?' },
                { type: 'verb', german: 'bestellen', russian: 'заказывать', conjugation: 'ich bestelle, du bestellst', example: 'Wir bestellen eine Pizza.' },
                { type: 'noun', german: 'Kunde', russian: 'клиент', article: 'der', plural: 'Kunden', pluralArticle: 'die', exampleSingular: 'Der Kunde ist König.', examplePlural: 'Unsere Firma hat viele zufriedene Kunden.' },
                { type: 'noun', german: 'Kundin', russian: 'клиентка', article: 'die', plural: 'Kundinnen', pluralArticle: 'die', exampleSingular: 'Die Kundin war sehr zufrieden.', examplePlural: 'Die Kundinnen lobten den guten Service.' },
                { type: 'noun', german: 'Imbiss', russian: 'закусочная', article: 'der', plural: 'Imbisse', pluralArticle: 'die', exampleSingular: 'Lass uns schnell einen Döner am Imbiss holen.', examplePlural: 'An Bahnhöfen gibt es viele Imbisse.' },
                { type: 'noun', german: 'Speisekarte', russian: 'меню', article: 'die', plural: 'Speisekarten', pluralArticle: 'die', exampleSingular: 'Könnte ich bitte die Speisekarte haben?', examplePlural: 'Die Speisekarten sind auch auf Englisch.' },
                { type: 'noun', german: 'Rechnung', russian: 'счёт', article: 'die', plural: 'Rechnungen', pluralArticle: 'die', exampleSingular: 'Die Rechnung, bitte!', examplePlural: 'Ich muss noch die Rechnungen bezahlen.' },
                { type: 'verb', german: 'probieren', russian: 'пробовать', conjugation: 'ich probiere, du probierst', example: 'Möchtest du den Wein probieren?' },
                { type: 'noun', german: 'Süßigkeit', russian: 'сладость', article: 'die', plural: 'Süßigkeiten', pluralArticle: 'die', exampleSingular: 'Schokolade ist meine Lieblingssüßigkeit.', examplePlural: 'Kinder lieben Süßigkeiten.' },
                { type: 'noun', german: 'Kuchen', russian: 'пирог, торт', article: 'der', plural: 'Kuchen', pluralArticle: 'die', exampleSingular: 'Ich backe einen Apfelkuchen.', examplePlural: 'Zum Geburtstag gibt es immer Kuchen.' },
                { type: 'noun', german: 'Eis', russian: 'мороженое', article: 'das', plural: 'Eissorten', pluralArticle: 'die', exampleSingular: 'Im Sommer esse ich gerne Eis.', examplePlural: 'Diese Eisdiele hat viele verschiedene Eissorten.' },
                { type: 'noun', german: 'Getränk', russian: 'напиток', article: 'das', plural: 'Getränke', pluralArticle: 'die', exampleSingular: 'Was ist dein Lieblingsgetränk?', examplePlural: 'Die Getränke sind im Preis inbegriffen.' },
              ]
            }
          ],
          exercises: []
        },
        {
          id: 'gesundheit-und-reisen',
          title: 'Здоровье и путешествия',
          explanation: `
            <h2 class="font-headline text-2xl font-bold mb-4">Визит к врачу</h2>
            <p class="mb-4">Для описания самочувствия и записи к врачу используются специальные глаголы и выражения. Часто необходимы возвратные глаголы.</p>
            <ul class="list-disc list-inside space-y-2 mb-6 bg-muted p-4 rounded-lg">
              <li><strong>Mir tut</strong> der Kopf <strong class="text-primary">weh</strong>. (У меня болит голова.)</li>
              <li>Ich fühle <strong class="text-primary">mich</strong> nicht gut. (Я плохо себя чувствую.)</li>
              <li>Ich habe <strong class="text-accent">Husten</strong> und <strong class="text-accent">Schnupfen</strong>. (У меня кашель и насморк.)</li>
              <li>Ich möchte einen Termin <strong class="text-primary">vereinbaren</strong>. (Я хотел бы записаться на прием.)</li>
            </ul>

            <h2 class="font-headline text-2xl font-bold mb-4">Придаточные предложения (Nebensätze)</h2>
            <p class="mb-4">На уровне А2 мы начинаем активнее использовать придаточные предложения. Главное правило: <strong class="text-primary">спрягаемый глагол всегда уходит в конец предложения</strong>.</p>
            <ul class="list-disc list-inside space-y-2 mb-6">
              <li>С <strong class="text-primary">dass</strong> (что): Ich weiß, <strong class="text-accent">dass du krank bist</strong>. (Я знаю, что ты болен.)</li>
              <li>С <strong class="text-primary">weil</strong> (потому что): Ich bleibe zu Hause, <strong class="text-accent">weil ich krank bin</strong>. (Я остаюсь дома, потому что я болен.)</li>
              <li>С <strong class="text-primary">wenn</strong> (если, когда): <strong class="text-accent">Wenn ich krank bin</strong>, gehe ich zum Arzt. (Когда я болею, я иду к врачу.)</li>
              <li>С <strong class="text-primary">obwohl</strong> (хотя): Er arbeitet, <strong class="text-accent">obwohl er krank ist</strong>. (Он работает, хотя болен.)</li>
            </ul>
          `,
          vocabulary: [
             {
              theme: 'Здоровье, самочувствие, одежда и погода',
              words: [
                { type: 'adjective', german: 'krank', russian: 'больной', comparative: 'kränker', superlative: 'am kränksten', example: 'Ich bin heute krank und kann nicht arbeiten.' },
                { type: 'adjective', german: 'gesund', russian: 'здоровый', comparative: 'gesünder', superlative: 'am gesündesten', example: 'Eine gesunde Ernährung ist wichtig.' },
                { type: 'noun', german: 'Krankheit', russian: 'болезнь', article: 'die', plural: 'Krankheiten', pluralArticle: 'die', exampleSingular: 'Grippe ist eine ansteckende Krankheit.', examplePlural: 'Es gibt viele seltene Krankheiten.' },
                { type: 'noun', german: 'Apotheke', russian: 'аптека', article: 'die', plural: 'Apotheken', pluralArticle: 'die', exampleSingular: 'Ich muss zur Apotheke gehen.', examplePlural: 'Die Apotheken haben nachts Notdienst.' },
                { type: 'noun', german: 'Medikament', russian: 'лекарство', article: 'das', plural: 'Medikamente', pluralArticle: 'die', exampleSingular: 'Nehmen Sie dieses Medikament dreimal täglich.', examplePlural: 'Dieses Medikament ist rezeptpflichtig.' },
                { type: 'verb', german: 'verschreiben', russian: 'выписывать (рецепт)', conjugation: 'ich verschreibe, du verschreibst', example: 'Der Arzt hat mir ein Medikament verschrieben.' },
                { type: 'noun', german: 'Tablette', russian: 'таблетка', article: 'die', plural: 'Tabletten', pluralArticle: 'die', exampleSingular: 'Ich nehme eine Tablette gegen Kopfschmerzen.', examplePlural: 'Die Tabletten müssen mit Wasser eingenommen werden.' },
                { type: 'noun', german: 'Grippe', russian: 'грипп', article: 'die', plural: 'Grippen', pluralArticle: 'die', exampleSingular: 'Ich habe die Grippe und muss im Bett bleiben.', examplePlural: 'Jedes Jahr gibt es neue Grippewellen.' },
                { type: 'noun', german: 'Erkältung', russian: 'простуда', article: 'die', plural: 'Erkältungen', pluralArticle: 'die', exampleSingular: 'Ich habe eine starke Erkältung.', examplePlural: 'Im Winter sind Erkältungen häufig.' },
                { type: 'noun', german: 'Untersuchung', russian: 'обследование', article: 'die', plural: 'Untersuchungen', pluralArticle: 'die', exampleSingular: 'Die Untersuchung beim Arzt dauert 30 Minuten.', examplePlural: 'Regelmäßige Untersuchungen sind wichtig.' },
                { type: 'noun', german: 'Kleidung', russian: 'одежда', article: 'die', plural: '(Pluralwort)', pluralArticle: '-', exampleSingular: 'Warme Kleidung ist im Winter wichtig.', examplePlural: 'Warme Kleidung ist im Winter wichtig.' },
                { type: 'verb', german: 'anprobieren', russian: 'примерять', conjugation: 'ich probiere an, du probierst an', example: 'Kann ich diese Hose anprobieren?' },
                { type: 'noun', german: 'Größe', russian: 'размер', article: 'die', plural: 'Größen', pluralArticle: 'die', exampleSingular: 'Welche Größe tragen Sie?', examplePlural: 'Wir haben das T-Shirt in allen Größen.' },
                { type: 'noun', german: 'Bluse', russian: 'блузка', article: 'die', plural: 'Blusen', pluralArticle: 'die', exampleSingular: 'Die Bluse ist aus Seide.', examplePlural: 'Sie hat viele weiße Blusen.' },
                { type: 'noun', german: 'Stiefel', russian: 'сапог', article: 'der', plural: 'Stiefel', pluralArticle: 'die', exampleSingular: 'Dieser Stiefel ist sehr warm.', examplePlural: 'Im Winter trage ich Stiefel.' },
                { type: 'noun', german: 'Tuch', russian: 'платок, шарф', article: 'das', plural: 'Tücher', pluralArticle: 'die', exampleSingular: 'Sie trägt ein elegantes Tuch um den Hals.', examplePlural: 'Die Tücher sind aus Wolle.' },
                { type: 'noun', german: 'Handschuhe', russian: 'перчатки', article: 'die', plural: '(Pluralwort)', pluralArticle: '-', exampleSingular: 'Ich habe meine Handschuhe verloren.', examplePlural: 'Ich habe meine Handschuhe verloren.' },
                { type: 'adjective', german: 'sonnig', russian: 'солнечно', comparative: 'sonniger', superlative: 'am sonnigsten', example: 'Morgen wird es sonnig.' },
                { type: 'adjective', german: 'bewölkt', russian: 'облачно', comparative: 'bewölkter', superlative: 'am bewölktesten', example: 'Der Himmel ist heute stark bewölkt.' },
                { type: 'adjective', german: 'regnerisch', russian: 'дождливо', comparative: 'regnerischer', superlative: 'am regnerischsten', example: 'Es ist ein regnerischer Tag.' },
                { type: 'adjective', german: 'windig', russian: 'ветрено', comparative: 'windiger', superlative: 'am windigsten', example: 'Am Meer ist es oft windig.' },
                { type: 'noun', german: 'Sturm', russian: 'шторм', article: 'der', plural: 'Stürme', pluralArticle: 'die', exampleSingular: 'Ein starker Sturm kommt auf.', examplePlural: 'Die Stürme im Herbst können gefährlich sein.' },
                { type: 'noun', german: 'Gewitter', russian: 'гроза', article: 'das', plural: 'Gewitter', pluralArticle: 'die', exampleSingular: 'Bei einem Gewitter sollte man drinnen bleiben.', examplePlural: 'Im Sommer gibt es oft kurze, aber heftige Gewitter.' },
                { type: 'noun', german: 'Kreuzung', russian: 'перекрёсток', article: 'die', plural: 'Kreuzungen', pluralArticle: 'die', exampleSingular: 'Fahren Sie an der nächsten Kreuzung rechts.', examplePlural: 'In der Stadt gibt es viele gefährliche Kreuzungen.' },
                { type: 'noun', german: 'Ampel', russian: 'светофор', article: 'die', plural: 'Ampeln', pluralArticle: 'die', exampleSingular: 'Die Ampel ist rot.', examplePlural: 'An Kreuzungen regeln Ampeln den Verkehr.' },
                { type: 'noun', german: 'Stau', russian: 'пробка', article: 'der', plural: 'Staus', pluralArticle: 'die', exampleSingular: 'Wegen eines Unfalls gibt es einen langen Stau.', examplePlural: 'Am Freitagnachmittag gibt es oft Staus.' },
                { type: 'noun', german: 'Autobahn', russian: 'автомагистраль', article: 'die', plural: 'Autobahnen', pluralArticle: 'die', exampleSingular: 'Auf der Autobahn kann man schnell fahren.', examplePlural: 'Deutsche Autobahnen sind für ihre hohen Geschwindigkeiten bekannt.' },
                { type: 'noun', german: 'Ticket', russian: 'билет', article: 'das', plural: 'Tickets', pluralArticle: 'die', exampleSingular: 'Haben Sie Ihr Ticket dabei?', examplePlural: 'Wo kann ich die Tickets kaufen?' },
                { type: 'verb', german: 'umsteigen', russian: 'делать пересадку', conjugation: 'ich steige um, du steigst um', example: 'In München müssen Sie umsteigen.' },
                { type: 'verb', german: 'abfahren', russian: 'отправляться', conjugation: 'er fährt ab', example: 'Der Zug fährt um 10:05 Uhr ab.' },
                { type: 'verb', german: 'ankommen', russian: 'прибывать', conjugation: 'er kommt an', example: 'Wann kommt der Zug in Berlin an?' },
                { type: 'noun', german: 'Unterkunft', russian: 'жильё', article: 'die', plural: 'Unterkünfte', pluralArticle: 'die', exampleSingular: 'Wir suchen eine günstige Unterkunft.', examplePlural: 'Die Unterkünfte waren schnell ausgebucht.' },
                { type: 'verb', german: 'reservieren', russian: 'бронировать', conjugation: 'ich reserviere, du reservierst', example: 'Ich möchte ein Zimmer für zwei Nächte reservieren.' },
                { type: 'verb', german: 'stornieren', russian: 'отменять', conjugation: 'ich storniere, du stornierst', example: 'Leider muss ich meine Reservierung stornieren.' },
                { type: 'noun', german: 'Sehenswürdigkeit', russian: 'достопримечательность', article: 'die', plural: 'Sehenswürdigkeiten', pluralArticle: 'die', exampleSingular: 'Das Brandenburger Tor ist eine berühmte Sehenswürdigkeit.', examplePlural: 'Wir haben viele Sehenswürdigkeiten besichtigt.' },
                { type: 'noun', german: 'Führung', russian: 'экскурсия', article: 'die', plural: 'Führungen', pluralArticle: 'die', exampleSingular: 'Die Führung durch das Schloss war sehr interessant.', examplePlural: 'Es werden Führungen in verschiedenen Sprachen angeboten.' },
                { type: 'noun', german: 'Reiseführer', russian: 'гид / путеводитель', article: 'der', plural: 'Reiseführer', pluralArticle: 'die', exampleSingular: 'Der Reiseführer hat uns viel über die Geschichte erzählt.', examplePlural: 'Ich kaufe mir immer einen Reiseführer für das Urlaubsland.' },
                { type: 'noun', german: 'Karte', russian: 'карта', article: 'die', plural: 'Karten', pluralArticle: 'die', exampleSingular: 'Ich brauche eine Karte von der Stadt.', examplePlural: 'Können Sie mir auf der Karte zeigen, wo das ist?' },
                { type: 'noun', german: 'Richtung', russian: 'направление', article: 'die', plural: 'Richtungen', pluralArticle: 'die', exampleSingular: 'In welche Richtung müssen wir gehen?', examplePlural: 'Der Wind kommt aus verschiedenen Richtungen.' },
                { type: 'noun', german: 'Plan', russian: 'план, схема', article: 'der', plural: 'Pläne', pluralArticle: 'die', exampleSingular: 'Ich habe einen Stadtplan dabei.', examplePlural: 'Wir machen Pläne für das Wochenende.' },
              ]
            }
          ],
          exercises: []
        }
      ]
    },
    { 
      id: 'b1', 
      title: 'Уровень B1: Средний', 
      description: 'Выход на новый уровень. Вы сможете понимать основное содержание большинства разговоров, высказывать свое мнение и справляться с большинством ситуаций в путешествии.', 
      topics: [
        {
          id: 'arbeit-und-gesellschaft',
          title: 'Работа, карьера и общество',
          explanation: `
            <h2 class="font-headline text-2xl font-bold mb-4">Прошедшие времена: Präteritum vs Perfekt</h2>
            <p class="mb-4">На уровне B1 мы активно различаем использование <strong class="text-primary">Perfekt</strong> (для устной речи, диалогов) и <strong class="text-primary">Präteritum</strong> (для письменного повествования, рассказов, новостей). Важно научиться использовать Präteritum не только для 'sein' и 'haben', но и для других распространенных глаголов.</p>
            <ul class="list-disc list-inside space-y-2 mb-6 bg-muted p-4 rounded-lg">
              <li><strong>Perfekt:</strong> "Ich <strong class="text-accent">habe</strong> gestern meinen Lebenslauf <strong class="text-accent">geschickt</strong>." (устный рассказ другу)</li>
              <li><strong>Präteritum:</strong> "Er <strong class="text-accent">schickte</strong> seinen Lebenslauf und <strong class="text-accent">wartete</strong> auf eine Antwort." (письменный рассказ)</li>
            </ul>

            <h2 class="font-headline text-2xl font-bold mb-4">Склонение прилагательных (Adjektivdeklination)</h2>
            <p class="mb-4">Это одна из ключевых тем B1. Окончание прилагательного зависит от артикля перед ним, падежа и рода существительного.</p>
            <ul class="list-disc list-inside space-y-2 mb-6">
              <li><strong>С определенным артиклем (der/die/das):</strong> Der <strong class="text-primary">neue</strong> Kollege ist nett.</li>
              <li><strong>С неопределенным артиклем (ein/eine):</strong> Ich suche einen <strong class="text-primary">neuen</strong> Job.</li>
              <li><strong>Без артикля:</strong> Ich trinke gern <strong class="text-primary">kalten</strong> Tee.</li>
            </ul>

            <h2 class="font-headline text-2xl font-bold mb-4">Коннекторы: выражение причин и следствий</h2>
            <p class="mb-4">Чтобы строить логичные высказывания, мы используем союзы и наречия, указывающие на причину (<strong class="text-primary">deshalb, deswegen</strong>) или уступку (<strong class="text-primary">obwohl, trotzdem</strong>).</p>
             <ul class="list-disc list-inside space-y-2 mb-6 bg-muted p-4 rounded-lg">
              <li><strong>Obwohl</strong> er krank war, <strong class="text-accent">ging</strong> er zur Arbeit. (Придаточное предложение, глагол в конце)</li>
              <li>Er war krank, <strong class="text-primary">trotzdem</strong> <strong class="text-accent">ging</strong> er zur Arbeit. (Два главных предложения, глагол на 2-м месте)</li>
            </ul>
          `,
          vocabulary: [
            {
              theme: 'Профессия, образование и общество',
              words: [
                { type: 'noun', german: 'Persönlichkeit', russian: 'личность', article: 'die', plural: 'Persönlichkeiten', pluralArticle: 'die', exampleSingular: 'Er hat eine starke Persönlichkeit.', examplePlural: 'Man trifft viele interessante Persönlichkeiten.' },
                { type: 'noun', german: 'Fähigkeit', russian: 'способность', article: 'die', plural: 'Fähigkeiten', pluralArticle: 'die', exampleSingular: 'Sprachenlernen ist eine wichtige Fähigkeit.', examplePlural: 'Er hat viele verborgene Fähigkeiten.' },
                { type: 'noun', german: 'Entscheidung', russian: 'решение', article: 'die', plural: 'Entscheidungen', pluralArticle: 'die', exampleSingular: 'Das war eine schwere Entscheidung.', examplePlural: 'Man muss oft schnell Entscheidungen treffen.' },
                { type: 'verb', german: 'planen', russian: 'планировать', conjugation: 'ich plane, du planst, er plant', example: 'Wir planen eine Reise nach Italien.' },
                { type: 'verb', german: 'vorbereiten', russian: 'готовить, подготавливать', conjugation: 'ich bereite vor, du bereitest vor, er bereitet vor', example: 'Ich muss mich auf die Prüfung vorbereiten.' },
                { type: 'noun', german: 'Beziehung', russian: 'отношение', article: 'die', plural: 'Beziehungen', pluralArticle: 'die', exampleSingular: 'Sie haben eine gute Beziehung.', examplePlural: 'Gute Beziehungen sind wichtig im Leben.' },
                { type: 'noun', german: 'Freundschaft', russian: 'дружба', article: 'die', plural: 'Freundschaften', pluralArticle: 'die', exampleSingular: 'Unsere Freundschaft ist mir sehr wichtig.', examplePlural: 'Echte Freundschaften halten ein Leben lang.' },
                { type: 'verb', german: 'heiraten', russian: 'жениться/выходить замуж', conjugation: 'ich heirate, du heiratest, er heiratet', example: 'Sie werden nächstes Jahr heiraten.' },
                { type: 'noun', german: 'Karriere', russian: 'карьера', article: 'die', plural: 'Karrieren', pluralArticle: 'die', exampleSingular: 'Sie macht eine steile Karriere.', examplePlural: 'Es gibt viele verschiedene Karrieren.' },
                { type: 'noun', german: 'Bewerbung', russian: 'заявление о приёме на работу', article: 'die', plural: 'Bewerbungen', pluralArticle: 'die', exampleSingular: 'Ich schreibe eine Bewerbung für die neue Stelle.', examplePlural: 'Die Firma hat viele Bewerbungen erhalten.' },
                { type: 'verb', german: 'sich bewerben', russian: 'подавать заявление', conjugation: 'ich bewerbe mich, du bewirbst dich', example: 'Ich bewerbe mich um einen Job.' },
                { type: 'verb', german: 'kündigen', russian: 'увольняться', conjugation: 'ich kündige, du kündigst', example: 'Er hat seinen Job gekündigt.' },
                { type: 'verb', german: 'einstellen', russian: 'нанимать', conjugation: 'ich stelle ein, du stellst ein', example: 'Die Firma stellt neue Mitarbeiter ein.' },
                { type: 'noun', german: 'Gehalt', russian: 'зарплата', article: 'das', plural: 'Gehälter', pluralArticle: 'die', exampleSingular: 'Das Gehalt wird am Monatsende gezahlt.', examplePlural: 'Die Gehälter sind in den letzten Jahren gestiegen.' },
                { type: 'verb', german: 'studieren', russian: 'учиться в вузе', conjugation: 'ich studiere, du studierst', example: 'Sie studiert Medizin in Berlin.' },
                { type: 'noun', german: 'Ausbildung', russian: 'образование, обучение', article: 'die', plural: 'Ausbildungen', pluralArticle: 'die', exampleSingular: 'Er macht eine Ausbildung zum Mechatroniker.', examplePlural: 'Gute Ausbildungen sind der Schlüssel zum Erfolg.' },
                { type: 'verb', german: 'durchfallen', russian: 'провалиться (на экзамене)', conjugation: 'ich falle durch, du fällst durch', example: 'Leider ist er durch die Prüfung durchgefallen.' },
                { type: 'noun', german: 'Note', russian: 'оценка', article: 'die', plural: 'Noten', pluralArticle: 'die', exampleSingular: 'Ich habe eine gute Note bekommen.', examplePlural: 'Der Lehrer verteilt die Noten.' },
                { type: 'verb', german: 'beschreiben', russian: 'описывать', conjugation: 'ich beschreibe, du beschreibst', example: 'Kannst du den Mann beschreiben?' },
                { type: 'verb', german: 'vergleichen', russian: 'сравнивать', conjugation: 'ich vergleiche, du vergleichst', example: 'Man sollte sich nicht immer mit anderen vergleichen.' },
                { type: 'verb', german: 'vorschlagen', russian: 'предлагать', conjugation: 'ich schlage vor, du schlägst vor', example: 'Ich schlage vor, dass wir ins Kino gehen.' },
                { type: 'verb', german: 'zustimmen', russian: 'соглашаться', conjugation: 'ich stimme zu, du stimmst zu', example: 'Ich stimme dir vollkommen zu.' },
                { type: 'verb', german: 'ablehnen', russian: 'отказывать', conjugation: 'ich lehne ab, du lehnst ab', example: 'Er hat mein Angebot abgelehnt.' },
                { type: 'verb', german: 'teilnehmen', russian: 'участвовать', conjugation: 'ich nehme teil, du nimmst teil', example: 'Nimmst du an dem Wettbewerb teil?' },
                { type: 'verb', german: 'vereinbaren', russian: 'договариваться', conjugation: 'ich vereinbare, du vereinbarst', example: 'Wir haben einen Termin für nächste Woche vereinbart.' },
                { type: 'noun', german: 'Single', russian: 'холостяк/незамужняя', article: 'der', plural: 'Singles', pluralArticle: 'die', exampleSingular: 'Er ist überzeugter Single.', examplePlural: 'Es gibt immer mehr Singles in Deutschland.'},
                { type: 'noun', german: 'Kontakt', russian: 'контакт', article: 'der', plural: 'Kontakte', pluralArticle: 'die', exampleSingular: 'Ich habe den Kontakt zu ihm verloren.', examplePlural: 'Gute Kontakte sind im Berufsleben wichtig.'},
                { type: 'verb', german: 'streiten', russian: 'ссориться', conjugation: 'ich streite, du streitest', example: 'Geschwister streiten oft.'},
                { type: 'verb', german: 'vertrauen', russian: 'доверять', conjugation: 'ich vertraue, du vertraust', example: 'Ich vertraue dir.'},
                { type: 'noun', german: 'Trennung', russian: 'расставание', article: 'die', plural: 'Trennungen', pluralArticle: 'die', exampleSingular: 'Die Trennung war für beide schwer.', examplePlural: 'Trennungen sind immer schmerzhaft.'},
                { type: 'verb', german: 'sich verlieben', russian: 'влюбляться', conjugation: 'ich verliebe mich, du verliebst dich', example: 'Ich habe mich in sie verliebt.'},
              ]
            }
          ],
          exercises: []
        },
        {
          id: 'lebensstil-und-medien',
          title: 'Образ жизни, здоровье и медиа',
          explanation: `
            <h2 class="font-headline text-2xl font-bold mb-4">Пассивный залог (Passiv)</h2>
            <p class="mb-4">Пассив используется, когда важно само действие, а не тот, кто его выполняет. На уровне B1 мы знакомимся с пассивом в настоящем (<strong class="text-primary">Präsens</strong>) и прошедшем (<strong class="text-primary">Präteritum</strong>) времени.</p>
            <ul class="list-disc list-inside space-y-2 mb-6 bg-muted p-4 rounded-lg">
              <li><strong>Präsens Passiv:</strong> "Hier <strong class="text-accent">wird</strong> nicht <strong class="text-accent">geraucht</strong>." (Здесь не курят.)</li>
              <li><strong>Präteritum Passiv:</strong> "Das Paket <strong class="text-accent">wurde</strong> gestern <strong class="text-accent">geliefert</strong>." (Посылка была доставлена вчера.)</li>
            </ul>

            <h2 class="font-headline text-2xl font-bold mb-4">Глаголы с предлогами (Verben mit Präpositionen)</h2>
            <p class="mb-4">Многие глаголы в немецком требуют после себя определенного предлога с определенным падежом. Эти связки нужно заучивать.</p>
            <ul class="list-disc list-inside space-y-2 mb-6">
              <li>warten <strong class="text-primary">auf</strong> (+ Akk): Ich warte <strong class="text-primary">auf den</strong> Bus.</li>
              <li>denken <strong class="text-primary">an</strong> (+ Akk): Ich denke <strong class="text-primary">an dich</strong>.</li>
              <li>sprechen <strong class="text-primary">mit</strong> (+ Dat): Ich spreche <strong class="text-primary">mit meinem</strong> Chef.</li>
              <li>sich freuen <strong class="text-primary">über</strong> (+ Akk): Ich freue mich <strong class="text-primary">über das</strong> Geschenk. (радоваться чему-то свершившемуся)</li>
            </ul>

            <h2 class="font-headline text-2xl font-bold mb-4">Косвенная речь (Indirekte Rede) - введение</h2>
            <p class="mb-4">Для передачи чужих слов, особенно в формальной речи, используется <strong class="text-primary">Konjunktiv I</strong>. На уровне B1 мы начинаем его узнавать и использовать в простых формах, часто с глаголом 'sein'.</p>
             <ul class="list-disc list-inside space-y-2 mb-6 bg-muted p-4 rounded-lg">
              <li><strong>Прямая речь:</strong> Er sagt: "Ich <strong class="text-accent">bin</strong> krank."</li>
              <li><strong>Косвенная речь:</strong> Er sagt, er <strong class="text-primary">sei</strong> krank. (Он говорит, что (якобы) болен.)</li>
            </ul>
          `,
          vocabulary: [
            {
              theme: 'Здоровье, эмоции, быт и еда',
              words: [
                { type: 'noun', german: 'Gesundheit', russian: 'здоровье', article: 'die', plural: '-', pluralArticle: '-', exampleSingular: 'Gesundheit ist das Wichtigste.', examplePlural: '-' },
                { type: 'noun', german: 'Beschwerden', russian: 'жалобы, недомогания', article: 'die', plural: '(Pluralwort)', pluralArticle: '-', exampleSingular: 'Ich habe seit gestern Beschwerden.', examplePlural: 'Der Arzt fragt nach den Beschwerden.' },
                { type: 'verb', german: 'sich erholen', russian: 'отдыхать, выздоравливать', conjugation: 'ich erhole mich, du erholst dich', example: 'Im Urlaub konnte ich mich gut erholen.' },
                { type: 'noun', german: 'Operation', russian: 'операция', article: 'die', plural: 'Operationen', pluralArticle: 'die', exampleSingular: 'Die Operation war erfolgreich.', examplePlural: 'Es gibt verschiedene Arten von Operationen.' },
                { type: 'noun', german: 'Stimmung', russian: 'настроение', article: 'die', plural: 'Stimmungen', pluralArticle: 'die', exampleSingular: 'Die Stimmung auf der Party war super.', examplePlural: 'Seine Stimmungen wechseln oft.' },
                { type: 'noun', german: 'Gefühl', russian: 'чувство', article: 'das', plural: 'Gefühle', pluralArticle: 'die', exampleSingular: 'Ich habe ein gutes Gefühl bei dieser Sache.', examplePlural: 'Man sollte über seine Gefühle sprechen.' },
                { type: 'adjective', german: 'glücklich', russian: 'счастливый', comparative: 'glücklicher', superlative: 'am glücklichsten', example: 'Sie sieht sehr glücklich aus.' },
                { type: 'adjective', german: 'traurig', russian: 'грустный', comparative: 'trauriger', superlative: 'am traurigsten', example: 'Warum bist du so traurig?' },
                { type: 'adjective', german: 'müde', russian: 'усталый', comparative: 'müder', superlative: 'am müdesten', example: 'Ich bin müde und gehe ins Bett.' },
                { type: 'adjective', german: 'nervös', russian: 'нервный', comparative: 'nervöser', superlative: 'am nervösesten', example: 'Vor Prüfungen bin ich immer nervös.' },
                { type: 'adjective', german: 'zufrieden', russian: 'довольный', comparative: 'zufriedener', superlative: 'am zufriedensten', example: 'Ich bin mit meiner Arbeit sehr zufrieden.' },
                { type: 'adjective', german: 'aufgeregt', russian: 'взволнованный', comparative: 'aufgeregter', superlative: 'am aufgeregtesten', example: 'Die Kinder sind vor Weihnachten immer sehr aufgeregt.' },
                { type: 'verb', german: 'sich freuen', russian: 'радоваться', conjugation: 'ich freue mich, du freust dich', example: 'Ich freue mich auf das Wochenende.' },
                { type: 'adjective', german: 'enttäuscht', russian: 'разочарованный', comparative: 'enttäuschter', superlative: 'am enttäuschtesten', example: 'Er war von dem Film sehr enttäuscht.' },
                { type: 'adjective', german: 'stolz', russian: 'гордый', comparative: 'stolzer', superlative: 'am stolzesten', example: 'Sie ist stolz auf ihre Tochter.' },
                { type: 'verb', german: 'Angst haben', russian: 'бояться', conjugation: 'ich habe Angst, du hast Angst', example: 'Viele Menschen haben Angst vor Spinnen.' },
                { type: 'adjective', german: 'mutig', russian: 'смелый', comparative: 'mutiger', superlative: 'am mutigsten', example: 'Es war mutig von dir, das zu sagen.' },
                { type: 'adjective', german: 'freundlich', russian: 'дружелюбный', comparative: 'freundlicher', superlative: 'am freundlichsten', example: 'Die Leute hier sind sehr freundlich.' },
                { type: 'adjective', german: 'nett', russian: 'милый, приятный', comparative: 'netter', superlative: 'am nettesten', example: 'Danke, das ist sehr nett von Ihnen.' },
                { type: 'noun', german: 'Mietshaus', russian: 'многоквартирный дом', article: 'das', plural: 'Mietshäuser', pluralArticle: 'die', exampleSingular: 'Wir wohnen in einem großen Mietshaus.', examplePlural: 'In Berlin gibt es viele alte Mietshäuser.'},
                { type: 'noun', german: 'Wohnblock', russian: 'жилой блок', article: 'der', plural: 'Wohnblöcke', pluralArticle: 'die', exampleSingular: 'Er wohnt in einem großen Wohnblock am Stadtrand.', examplePlural: 'Die neuen Wohnblöcke haben alle einen Spielplatz.'},
                { type: 'noun', german: 'Reihenhaus', russian: 'таунхаус', article: 'das', plural: 'Reihenhäuser', pluralArticle: 'die', exampleSingular: 'Ein Reihenhaus ist ein guter Kompromiss zwischen Wohnung und freistehendem Haus.', examplePlural: 'In dieser Straße gibt es nur Reihenhäuser.'},
                { type: 'noun', german: 'Mietvertrag', russian: 'договор аренды', article: 'der', plural: 'Mietverträge', pluralArticle: 'die', exampleSingular: 'Ich muss den Mietvertrag noch unterschreiben.', examplePlural: 'Lesen Sie Mietverträge immer sorgfältig durch.' },
                { type: 'verb', german: 'einziehen', russian: 'въезжать', conjugation: 'ich ziehe ein, du ziehst ein', example: 'Nächste Woche ziehen wir in die neue Wohnung ein.' },
                { type: 'verb', german: 'ausziehen', russian: 'выезжать', conjugation: 'ich ziehe aus, du ziehst aus', example: 'Er ist letztes Jahr bei seinen Eltern ausgezogen.' },
                { type: 'verb', german: 'renovieren', russian: 'ремонтировать', conjugation: 'ich renoviere, du renovierst', example: 'Wir müssen die Küche renovieren.' },
                { type: 'adjective', german: 'sauber', russian: 'чистый', comparative: 'sauberer', superlative: 'am saubersten', example: 'Das Hotelzimmer war sehr sauber.' },
                { type: 'adjective', german: 'ordentlich', russian: 'аккуратный', comparative: 'ordentlicher', superlative: 'am ordentlichsten', example: 'Sein Schreibtisch ist immer ordentlich.' },
                { type: 'adjective', german: 'schmutzig', russian: 'грязный', comparative: 'schmutziger', superlative: 'am schmutzigsten', example: 'Deine Schuhe sind ganz schmutzig.' },
                { type: 'noun', german: 'Konto', russian: 'счёт в банке', article: 'das', plural: 'Konten', pluralArticle: 'die', exampleSingular: 'Ich muss Geld auf mein Konto einzahlen.', examplePlural: 'Man kann mehrere Konten haben.' },
                { type: 'noun', german: 'Bank', russian: 'банк', article: 'die', plural: 'Banken', pluralArticle: 'die', exampleSingular: 'Die Bank schließt um 16 Uhr.', examplePlural: 'In Deutschland gibt es viele verschiedene Banken.' },
                { type: 'noun', german: 'Geldautomat', russian: 'банкомат', article: 'der', plural: 'Geldautomaten', pluralArticle: 'die', exampleSingular: 'Wo ist der nächste Geldautomat?', examplePlural: 'Geldautomaten findet man fast überall.' },
                { type: 'verb', german: 'sparen', russian: 'копить, экономить', conjugation: 'ich spare, du sparst', example: 'Ich spare für ein neues Auto.' },
                { type: 'verb', german: 'ausgeben', russian: 'тратить', conjugation: 'ich gebe aus, du gibst aus', example: 'Ich gebe zu viel Geld für Kleidung aus.' },
                { type: 'verb', german: 'reklamieren', russian: 'жаловаться, предъявлять претензию', conjugation: 'ich reklamiere, du reklamierst', example: 'Ich möchte diesen kaputten Toaster reklamieren.' },
                { type: 'noun', german: 'Mahlzeit', russian: 'приём пищи', article: 'die', plural: 'Mahlzeiten', pluralArticle: 'die', exampleSingular: 'Das Frühstück ist die erste Mahlzeit des Tages.', examplePlural: 'Man sollte regelmäßige Mahlzeiten einhalten.' },
                { type: 'noun', german: 'Lebensmittel', russian: 'продукты', article: 'das', plural: 'Lebensmittel', pluralArticle: 'die', exampleSingular: 'Dieses Lebensmittel ist sehr gesund.', examplePlural: 'Ich kaufe Lebensmittel für die ganze Woche.' },
                { type: 'noun', german: 'Zutat', russian: 'ингредиент', article: 'die', plural: 'Zutaten', pluralArticle: 'die', exampleSingular: 'Die geheime Zutat ist Liebe.', examplePlural: 'Für dieses Rezept braucht man nur wenige Zutaten.' },
                { type: 'verb', german: 'schmecken', russian: 'быть на вкус', conjugation: 'es schmeckt', example: 'Das Essen schmeckt sehr gut.' },
                { type: 'adjective', german: 'vegetarisch', russian: 'вегетарианский', comparative: '-', superlative: '-', example: 'Ich esse am liebsten vegetarisch.' },
                { type: 'noun', german: 'Hunger', russian: 'голод', article: 'der', plural: '-', pluralArticle: '-', exampleSingular: 'Ich habe großen Hunger.', examplePlural: '-' },
                { type: 'noun', german: 'Durst', russian: 'жажда', article: 'der', plural: '-', pluralArticle: '-', exampleSingular: 'Nach dem Sport habe ich immer Durst.', examplePlural: '-' },
                { type: 'adjective', german: 'günstig', russian: 'выгодный', comparative: 'günstiger', superlative: 'am günstigsten', example: 'Das Hotel war überraschend günstig.'},
                { type: 'adjective', german: 'modern', russian: 'современный', comparative: 'moderner', superlative: 'am modernsten', example: 'Die Wohnung ist sehr modern eingerichtet.'},
                { type: 'adjective', german: 'altmodisch', russian: 'старомодный', comparative: 'altmodischer', superlative: 'am altmodischsten', example: 'Seine Kleidung ist etwas altmodisch.'},
                { type: 'noun', german: 'Kleidungsstück', russian: 'предмет одежды', article: 'das', plural: 'Kleidungsstücke', pluralArticle: 'die', exampleSingular: 'Mein Lieblingskleidungsstück ist diese Jacke.', examplePlural: 'Sie hat zu viele Kleidungsstücke.'},
                { type: 'verb', german: 'passen', russian: 'подходить (по размеру)', conjugation: 'es passt', example: 'Die Hose passt mir nicht.'},
                { type: 'noun', german: 'Verkäufer', russian: 'продавец', article: 'der', plural: 'Verkäufer', pluralArticle: 'die', exampleSingular: 'Der Verkäufer war sehr freundlich.', examplePlural: 'Die Verkäufer waren sehr beschäftigt.'},
                { type: 'verb', german: 'servieren', russian: 'подавать', conjugation: 'ich serviere, du servierst', example: 'Der Kellner serviert das Essen.'},
                { type: 'adjective', german: 'vegan', russian: 'веганский', comparative: '-', superlative: '-', example: 'Dieses Gericht ist komplett vegan.'},
              ]
            }
          ],
          exercises: []
        },
        {
          id: 'reisen-und-technologie',
          title: 'Путешествия, технологии и экология',
          explanation: `
            <h2 class="font-headline text-2xl font-bold mb-4">Относительные предложения (Relativsätze)</h2>
            <p class="mb-4">Эти предложения дают дополнительную информацию о существительном из главного предложения. Они вводятся относительными местоимениями (<strong class="text-primary">der, die, das</strong>), которые ставятся сразу после существительного. Глагол в таком предложении уходит в конец.</p>
            <ul class="list-disc list-inside space-y-2 mb-6 bg-muted p-4 rounded-lg">
              <li>Das ist der Bus, <strong class="text-accent">der</strong> nach Hamburg <strong class="text-accent">fährt</strong>. (Это автобус, который едет в Гамбург.)</li>
              <li>Ich suche das Hotel, <strong class="text-accent">das</strong> du mir <strong class="text-accent">empfohlen hast</strong>. (Я ищу отель, который ты мне порекомендовал.)</li>
            </ul>

            <h2 class="font-headline text-2xl font-bold mb-4">Будущее время (Futur I)</h2>
            <p class="mb-4">Futur I используется для выражения планов на будущее или предположений. Оно образуется с помощью вспомогательного глагола <strong class="text-primary">werden</strong> и инфинитива основного глагола в конце предложения.</p>
            <ul class="list-disc list-inside space-y-2 mb-6">
              <li><strong>План:</strong> Nächstes Jahr <strong class="text-primary">werde</strong> ich nach Deutschland <strong class="text-accent">fliegen</strong>.</li>
              <li><strong>Предположение:</strong> Er ist nicht da. Er <strong class="text-primary">wird</strong> wohl krank <strong class="text-accent">sein</strong>. (Его нет. Он, наверное, болен.)</li>
            </ul>

            <h2 class="font-headline text-2xl font-bold mb-4">Номинализация (Nominalisierung)</h2>
            <p class="mb-4">Это превращение глаголов или прилагательных в существительные. Этот прием делает речь более формальной и часто используется в письменном языке. Самый простой способ - написать инфинитив глагола с большой буквы и добавить артикль <strong class="text-primary">das</strong>.</p>
             <ul class="list-disc list-inside space-y-2 mb-6 bg-muted p-4 rounded-lg">
              <li>rauchen (курить) → <strong class="text-accent">Das Rauchen</strong> ist hier verboten.</li>
              <li>leben (жить) → <strong class="text-accent">Das Leben</strong> in der Stadt ist teuer.</li>
            </ul>
          `,
          vocabulary: [
             {
              theme: 'Путешествия, экология и погода',
              words: [
                { type: 'noun', german: 'Reise', russian: 'путешествие', article: 'die', plural: 'Reisen', pluralArticle: 'die', exampleSingular: 'Unsere Reise nach Japan war unvergesslich.', examplePlural: 'Er hat viele interessante Reisen gemacht.' },
                { type: 'noun', german: 'Urlaub', russian: 'отпуск', article: 'der', plural: 'Urlaube', pluralArticle: 'die', exampleSingular: 'Ich brauche dringend Urlaub.', examplePlural: 'Wir planen unsere Urlaube immer lange im Voraus.' },
                { type: 'verb', german: 'buchen', russian: 'бронировать', conjugation: 'ich buche, du buchst', example: 'Wir haben den Flug schon gebucht.' },
                { type: 'noun', german: 'Verkehrsmittel', russian: 'транспортное средство', article: 'das', plural: 'Verkehrsmittel', pluralArticle: 'die', exampleSingular: 'Die Bahn ist ein umweltfreundliches Verkehrsmittel.', examplePlural: 'In der Stadt nutze ich öffentliche Verkehrsmittel.' },
                { type: 'noun', german: 'Fahrkarte', russian: 'билет', article: 'die', plural: 'Fahrkarten', pluralArticle: 'die', exampleSingular: 'Haben Sie Ihre Fahrkarte dabei?', examplePlural: 'Man kann Fahrkarten am Automaten kaufen.' },
                { type: 'noun', german: 'Umwelt', russian: 'окружающая среда', article: 'die', plural: '-', pluralArticle: '-', exampleSingular: 'Wir müssen die Umwelt schützen.', examplePlural: '-' },
                { type: 'noun', german: 'Natur', russian: 'природа', article: 'die', plural: '-', pluralArticle: '-', exampleSingular: 'Ich gehe gerne in der Natur spazieren.', examplePlural: '-' },
                { type: 'adjective', german: 'trocken', russian: 'сухой', comparative: 'trockener', superlative: 'am trockensten', example: 'Der Sommer war sehr heiß und trocken.' },
                { type: 'adjective', german: 'nass', russian: 'мокрый', comparative: 'nasser', superlative: 'am nassesten', example: 'Meine Kleidung ist vom Regen ganz nass.' },
                { type: 'noun', german: 'Jahreszeit', russian: 'время года', article: 'die', plural: 'Jahreszeiten', pluralArticle: 'die', exampleSingular: 'Der Frühling ist meine liebste Jahreszeit.', examplePlural: 'Deutschland hat vier Jahreszeiten.' },
                { type: 'noun', german: 'Frühling', russian: 'весна', article: 'der', plural: 'Frühlinge', pluralArticle: 'die', exampleSingular: 'Im Frühling wird alles grün.', examplePlural: 'Die Frühlinge meiner Kindheit waren wärmer.' },
                { type: 'noun', german: 'Sommer', russian: 'лето', article: 'der', plural: 'Sommer', pluralArticle: 'die', exampleSingular: 'Im Sommer fahren wir ans Meer.', examplePlural: 'Die letzten Sommer waren sehr heiß.' },
                { type: 'noun', german: 'Herbst', russian: 'осень', article: 'der', plural: 'Herbste', pluralArticle: 'die', exampleSingular: 'Im Herbst fallen die Blätter von den Bäumen.', examplePlural: 'Die Herbste sind oft neblig.' },
                { type: 'noun', german: 'Winter', russian: 'зима', article: 'der', plural: 'Winter', pluralArticle: 'die', exampleSingular: 'Im Winter fahre ich gerne Ski.', examplePlural: 'Die Winter in Kanada sind sehr kalt.' },
                { type: 'verb', german: 'erleben', russian: 'переживать, испытывать', conjugation: 'ich erlebe, du erlebst', example: 'Auf Reisen kann man viel erleben.'},
              ]
            },
            {
              theme: 'Союзы и наречия',
              words: [
                { type: 'conjunction', german: 'deshalb', russian: 'поэтому', structure: 'Порядок слов как в главном предложении (глагол на 2-м месте).', example: 'Ich war krank, deshalb bin ich nicht gekommen.' },
                { type: 'conjunction', german: 'deswegen', russian: 'поэтому, из-за этого', structure: 'Порядок слов как в главном предложении (глагол на 2-м месте).', example: 'Das Wetter war schlecht, deswegen sind wir zu Hause geblieben.' },
                { type: 'conjunction', german: 'obwohl', russian: 'хотя', structure: 'Придаточное предложение, глагол в конце.', example: 'Obwohl es regnet, gehen wir spazieren.' },
                { type: 'conjunction', german: 'trotzdem', russian: 'несмотря на это', structure: 'Порядок слов как в главном предложении (глагол на 2-м месте).', example: 'Es regnet, trotzdem gehen wir spazieren.' },
                { type: 'adverb', german: 'zuerst', russian: 'сначала', structure: 'Может стоять на первом месте, тогда глагол идет за ним.', example: 'Zuerst essen wir, dann schauen wir einen Film.' },
                { type: 'adverb', german: 'dann', russian: 'затем', structure: 'Может стоять на первом месте, тогда глагол идет за ним.', example: 'Wir gehen ins Kino, und dann essen wir Eis.' },
                { type: 'adverb', german: 'später', russian: 'позже', structure: 'Может стоять на первом месте или в середине предложения.', example: 'Ich rufe dich später an.' },
                { type: 'adverb', german: 'wahrscheinlich', russian: 'вероятно', structure: 'Обычно стоит после глагола.', example: 'Er kommt wahrscheinlich zu spät.' },
              ]
            }
          ],
          exercises: []
        },
        {
          id: 'vergangene-ereignisse',
          title: 'Рассказ о прошлом: Plusquamperfekt',
          explanation: `
            <h2 class="font-headline text-2xl font-bold mb-4">Предпрошедшее время (Plusquamperfekt)</h2>
            <p class="mb-4">Plusquamperfekt используется для описания действия, которое произошло <strong class="text-primary">раньше</strong> другого действия в прошлом. Это "прошлое в прошлом".</p>
            <p class="mb-4">Оно образуется с помощью вспомогательных глаголов <strong class="text-accent">hatte</strong> или <strong class="text-accent">war</strong> (формы Präteritum от haben/sein) и <strong class="text-primary">Partizip II</strong> основного глагола.</p>
            <ul class="list-disc list-inside space-y-2 mb-6 bg-muted p-4 rounded-lg">
              <li><strong class="text-accent">hatte</strong> + Partizip II (для большинства глаголов)</li>
              <li><strong class="text-accent">war</strong> + Partizip II (для глаголов движения и смены состояния)</li>
            </ul>

            <h2 class="font-headline text-2xl font-bold mb-4">Использование в предложении</h2>
            <p class="mb-4">Чаще всего Plusquamperfekt используется в сложном предложении вместе с Präteritum или Perfekt, чтобы показать последовательность событий. Союз <strong class="text-primary">nachdem</strong> (после того как) очень часто используется с Plusquamperfekt.</p>
            <div class="bg-muted p-3 rounded-lg my-4">
              <p><em><strong class="text-primary">Nachdem</strong> ich die Hausaufgaben <strong class="text-accent">gemacht hatte</strong>, ging ich ins Kino.</em></p>
              <p class="mt-2 text-sm text-muted-foreground">(После того как я <strong class="text-accent">сделал</strong> домашнее задание [первое действие в прошлом], я пошел в кино [второе действие в прошлом].)</p>
            </div>
            <div class="bg-muted p-3 rounded-lg my-4">
              <p><em>Er kam am Bahnhof an. Der Zug <strong class="text-accent">war</strong> schon <strong class="text-accent">abgefahren</strong>.</em></p>
              <p class="mt-2 text-sm text-muted-foreground">(Он прибыл на вокзал. Поезд <strong class="text-accent">уже уехал</strong> [действие до его прибытия].)</p>
            </div>
          `,
          vocabulary: [
            {
              theme: 'Последовательность действий',
              words: [
                { type: 'conjunction', german: 'nachdem', russian: 'после того как', structure: 'Придаточное предложение, глагол в конце. Часто с Plusquamperfekt.', example: 'Nachdem er gegessen hatte, las er ein Buch.' },
                { type: 'conjunction', german: 'bevor', russian: 'перед тем как', structure: 'Придаточное предложение, глагол в конце.', example: 'Bevor ich schlafen gehe, putze ich mir die Zähne.' },
                { type: 'adverb', german: 'zuvor', russian: 'ранее, до этого', structure: 'Может стоять на первом или в середине предложения.', example: 'Er hatte zuvor noch nie davon gehört.' },
                { type: 'adverb', german: 'anschließend', russian: 'затем, после этого', structure: 'Может стоять на первом месте (глагол после него) или в середине.', example: 'Zuerst haben wir gegessen, anschließend sind wir spazieren gegangen.' },
                { type: 'adverb', german: 'bereits', russian: 'уже', structure: 'Обычно стоит после глагола.', example: 'Als ich ankam, war er bereits gegangen.' },
                { type: 'adverb', german: 'damals', russian: 'тогда, в то время', structure: 'Может стоять на первом месте или в середине предложения.', example: 'Damals war alles anders.' },
              ]
            }
          ],
          exercises: []
        }
      ] 
    },
    { 
      id: 'b2', 
      title: 'Уровень B2: Продвинутый', 
      description: 'Свободное общение. Вы сможете понимать сложные тексты, бегло общаться с носителями языка и ясно излагать свои мысли на широкий круг тем.', 
      topics: [
        {
          id: 'persoenlichkeit-gesellschaft-politik',
          title: 'Личность, общество и политика',
          explanation: `
            <h2 class="font-headline text-2xl font-bold mb-4">Выражение мнения и аргументация</h2>
            <p class="mb-4">На уровне B2 ключевым навыком становится способность не просто общаться, а аргументированно выражать своё мнение, взвешивать "за" и "против", а также понимать чужую точку зрения. Для этого используются сложные союзы и речевые обороты.</p>
            <ul class="list-disc list-inside space-y-2 mb-6 bg-muted p-4 rounded-lg">
              <li><strong>Двусторонние союзы:</strong> <strong class="text-primary">einerseits ... andererseits</strong> (с одной стороны... с другой стороны), <strong class="text-primary">sowohl ... als auch</strong> (как..., так и...), <strong class="text-primary">entweder ... oder</strong> (или... или...), <strong class="text-primary">weder ... noch</strong> (ни... ни...).</li>
              <li><strong>Выражение мнения:</strong> Meiner Meinung nach..., Ich bin der Ansicht, dass...</li>
              <li><strong>Аргументация:</strong> Das Hauptargument dafür ist..., Dagegen spricht, dass...</li>
            </ul>

            <h2 class="font-headline text-2xl font-bold mb-4">Пассив с модальными глаголами</h2>
            <p class="mb-4">Конструкции пассива усложняются, позволяя выражать долженствование, возможность или невозможность совершения действия над объектом.</p>
            <ul class="list-disc list-inside space-y-2 mb-6">
              <li>Das Dokument <strong class="text-accent">muss</strong> heute noch <strong class="text-primary">unterschrieben werden</strong>. (Документ должен быть подписан ещё сегодня.)</li>
              <li>Das Problem <strong class="text-accent">kann</strong> leicht <strong class="text-primary">gelöst werden</strong>. (Проблема может быть легко решена.)</li>
            </ul>
          `,
          vocabulary: [
            {
              theme: 'Личность, общество и политика',
              words: [
                { type: 'noun', german: 'Verhalten', russian: 'поведение', article: 'das', plural: 'Verhaltensweisen', pluralArticle: 'die', exampleSingular: 'Sein Verhalten war inakzeptabel.', examplePlural: 'Die verschiedenen Verhalten der Tiere wurden untersucht.' },
                { type: 'noun', german: 'Einstellung', russian: 'отношение, позиция', article: 'die', plural: 'Einstellungen', pluralArticle: 'die', exampleSingular: 'Er hat eine positive Einstellung zum Leben.', examplePlural: 'Die Einstellungen zur Arbeit haben sich geändert.' },
                { type: 'noun', german: 'Meinung', russian: 'мнение', article: 'die', plural: 'Meinungen', pluralArticle: 'die', exampleSingular: 'Meiner Meinung nach ist das eine gute Idee.', examplePlural: 'Die Meinungen zu diesem Thema sind geteilt.' },
                { type: 'noun', german: 'Verantwortung', russian: 'ответственность', article: 'die', plural: 'Verantwortungen', pluralArticle: 'die', exampleSingular: 'Er übernimmt die volle Verantwortung.', examplePlural: 'Eltern haben viele Verantwortungen.' },
                { type: 'verb', german: 'sich vorstellen', russian: 'представлять себе', conjugation: 'ich stelle mir vor, du stellst dir vor', example: 'Ich kann mir ein Leben ohne Internet nicht vorstellen.' },
                { type: 'adjective', german: 'selbstständig', russian: 'самостоятельный', comparative: 'selbstständiger', superlative: 'am selbstständigsten', example: 'Sie ist eine sehr selbstständige Frau.' },
                { type: 'adjective', german: 'zuverlässig', russian: 'надёжный', comparative: 'zuverlässiger', superlative: 'am zuverlässigsten', example: 'Mein Auto ist sehr zuverlässig.' },
                { type: 'adjective', german: 'verantwortungsbewusst', russian: 'ответственный', comparative: 'verantwortungsbewusster', superlative: 'am verantwortungsbewusstesten', example: 'Für diesen Job brauchen wir eine verantwortungsbewusste Person.' },
                { type: 'noun', german: 'Konflikt', russian: 'конфликт', article: 'der', plural: 'Konflikte', pluralArticle: 'die', exampleSingular: 'Wir müssen eine Lösung für diesen Konflikt finden.', examplePlural: 'Konflikte gehören zum Leben dazu.' },
                { type: 'adjective', german: 'unzufrieden', russian: 'недовольный', comparative: 'unzufriedener', superlative: 'am unzufriedensten', example: 'Er war mit dem Ergebnis unzufrieden.' },
                { type: 'adjective', german: 'entspannt', russian: 'спокойный, расслабленный', comparative: 'entspannter', superlative: 'am entspanntesten', example: 'Nach dem Yoga fühle ich mich immer entspannt.' },
                { type: 'adjective', german: 'gestresst', russian: 'в стрессовом состоянии', comparative: 'gestresster', superlative: 'am gestresstesten', example: 'Vor der Prüfung war sie sehr gestresst.' },
                { type: 'adjective', german: 'ängstlich', russian: 'трусливый, боязливый', comparative: 'ängstlicher', superlative: 'am ängstlichsten', example: 'Als Kind war ich sehr ängstlich.' },
                { type: 'adjective', german: 'höflich', russian: 'вежливый', comparative: 'höflicher', superlative: 'am höflichsten', example: 'Es ist wichtig, immer höflich zu sein.' },
                { type: 'adjective', german: 'unhöflich', russian: 'невежливый', comparative: 'unhöflicher', superlative: 'am unhöflichsten', example: 'Sein unhöfliches Verhalten hat alle schockiert.' },
                { type: 'noun', german: 'Gesellschaft', russian: 'общество', article: 'die', plural: 'Gesellschaften', pluralArticle: 'die', exampleSingular: 'Die Gesellschaft verändert sich ständig.', examplePlural: 'Wir leben in modernen Gesellschaften.' },
                { type: 'noun', german: 'Tradition', russian: 'традиция', article: 'die', plural: 'Traditionen', pluralArticle: 'die', exampleSingular: 'Weihnachten ist eine wichtige Tradition in Deutschland.', examplePlural: 'Jede Familie hat ihre eigenen Traditionen.' },
                { type: 'noun', german: 'Kultur', russian: 'культура', article: 'die', plural: 'Kulturen', pluralArticle: 'die', exampleSingular: 'Ich interessiere mich für fremde Kulturen.', examplePlural: 'Die Vielfalt der Kulturen bereichert die Welt.' },
                { type: 'noun', german: 'Politik', russian: 'политика', article: 'die', plural: '-', pluralArticle: '-', exampleSingular: 'Ich interessiere mich nicht für Politik.', examplePlural: '-' },
                { type: 'noun', german: 'Regierung', russian: 'правительство', article: 'die', plural: 'Regierungen', pluralArticle: 'die', exampleSingular: 'Die Regierung hat neue Gesetze beschlossen.', examplePlural: 'Die Regierungen verhandeln über ein Abkommen.' },
                { type: 'noun', german: 'Demokratie', russian: 'демократия', article: 'die', plural: 'Demokratien', pluralArticle: 'die', exampleSingular: 'Die Demokratie ist eine wichtige Errungenschaft.', examplePlural: 'Es gibt verschiedene Formen von Demokratien.' },
                { type: 'noun', german: 'Wahlen', russian: 'выборы', article: 'die', plural: '(Pluralwort)', pluralArticle: '-', exampleSingular: 'Die nächsten Wahlen finden in vier Jahren statt.', examplePlural: 'Die nächsten Wahlen finden in vier Jahren statt.' },
                { type: 'verb', german: 'stimmen', russian: 'голосовать', conjugation: 'ich stimme, du stimmst', example: 'Ich stimme für diese Partei.' },
                { type: 'noun', german: 'Partei', russian: 'партия', article: 'die', plural: 'Parteien', pluralArticle: 'die', exampleSingular: 'Welche Partei würdest du wählen?', examplePlural: 'In Deutschland gibt es viele politische Parteien.' },
                { type: 'noun', german: 'Gesetz', russian: 'закон', article: 'das', plural: 'Gesetze', pluralArticle: 'die', exampleSingular: 'Das neue Gesetz tritt morgen in Kraft.', examplePlural: 'Die Gesetze müssen für alle gelten.' },
                { type: 'noun', german: 'Rechte', russian: 'права', article: 'die', plural: '(Pluralwort)', pluralArticle: '-', exampleSingular: 'Die Menschenrechte sind unantastbar.', examplePlural: 'Die Menschenrechte sind unantastbar.' },
                { type: 'noun', german: 'Pflicht', russian: 'обязанность', article: 'die', plural: 'Pflichten', pluralArticle: 'die', exampleSingular: 'Es ist meine Pflicht, Ihnen zu helfen.', examplePlural: 'Mit Rechten kommen auch Pflichten.' },
                { type: 'noun', german: 'Integration', russian: 'интеграция', article: 'die', plural: '-', pluralArticle: '-', exampleSingular: 'Die Integration von Flüchtlingen ist eine große Herausforderung.', examplePlural: '-' },
                { type: 'noun', german: 'Migration', russian: 'миграция', article: 'die', plural: '-', pluralArticle: '-', exampleSingular: 'Die Migration ist ein globales Phänomen.', examplePlural: '-' },
                { type: 'noun', german: 'soziale Gerechtigkeit', russian: 'социальная справедливость', article: 'die', plural: '-', pluralArticle: '-', exampleSingular: 'Soziale Gerechtigkeit ist ein wichtiges politisches Ziel.', examplePlural: '-' },
              ]
            }
          ],
          exercises: []
        },
        {
          id: 'arbeit-bildung-technologie',
          title: 'Работа, образование и технологии',
          explanation: `
            <h2 class="font-headline text-2xl font-bold mb-4">Konjunktiv II: Нереальные желания и вежливость</h2>
            <p class="mb-4">Konjunktiv II используется для выражения гипотетических ситуаций, нереальных желаний, советов и очень вежливых просьб. Часто образуется с помощью <strong class="text-primary">würde + Infinitiv</strong>.</p>
            <ul class="list-disc list-inside space-y-2 mb-6 bg-muted p-4 rounded-lg">
              <li><strong>Нереальное желание:</strong> Wenn ich mehr Geld <strong class="text-accent">hätte</strong>, <strong class="text-accent">würde</strong> ich eine Weltreise <strong class="text-accent">machen</strong>. (Если бы у меня было больше денег, я бы совершил кругосветное путешествие.)</li>
              <li><strong>Совет:</strong> An deiner Stelle <strong class="text-accent">würde</strong> ich mehr <strong class="text-accent">lernen</strong>. (На твоём месте я бы больше учил.)</li>
              <li><strong>Вежливая просьба:</strong> <strong class="text-accent">Würden</strong> Sie bitte das Fenster <strong class="text-accent">schließen</strong>? (Не могли бы вы закрыть окно, пожалуйста?)</li>
            </ul>

            <h2 class="font-headline text-2xl font-bold mb-4">Номинализация и вербализация</h2>
            <p class="mb-4">На уровне B2 важно уметь гибко переходить от глагольных конструкций к существительным (Nominalisierung) и обратно (Verbalisierung). Это признак высокого стиля.</p>
            <ul class="list-disc list-inside space-y-2 mb-6">
              <li><strong>Verbal:</strong> Man muss die Daten <strong class="text-accent">analysieren</strong>. → <strong>Nominal:</strong> <strong class="text-primary">Die Analyse</strong> der Daten ist notwendig.</li>
              <li><strong>Nominal:</strong> <strong class="text-primary">Die Veröffentlichung</strong> des Artikels... → <strong>Verbal:</strong> Man <strong class="text-accent">veröffentlicht</strong> den Artikel...</li>
            </ul>
          `,
          vocabulary: [
            {
              theme: 'Работа, образование и технологии',
              words: [
                { type: 'noun', german: 'Arbeitsplatz', russian: 'рабочее место', article: 'der', plural: 'Arbeitsplätze', pluralArticle: 'die', exampleSingular: 'Ich habe einen neuen Arbeitsplatz.', examplePlural: 'Die Firma schafft neue Arbeitsplätze.' },
                { type: 'noun', german: 'Arbeitsbedingungen', russian: 'условия работы', article: 'die', plural: '(Pluralwort)', pluralArticle: '-', exampleSingular: 'Die Arbeitsbedingungen in dieser Firma sind sehr gut.', examplePlural: 'Die Arbeitsbedingungen in dieser Firma sind sehr gut.' },
                { type: 'noun', german: 'Weiterbildung', russian: 'повышение квалификации', article: 'die', plural: 'Weiterbildungen', pluralArticle: 'die', exampleSingular: 'Ich mache eine Weiterbildung zum Projektmanager.', examplePlural: 'Weiterbildungen sind wichtig für die Karriere.' },
                { type: 'noun', german: 'Berufseinstieg', russian: 'начало карьеры', article: 'der', plural: 'Berufseinstiege', pluralArticle: 'die', exampleSingular: 'Der Berufseinstieg ist oft schwierig.', examplePlural: 'Wir helfen Absolventen beim Berufseinstieg.' },
                { type: 'noun', german: 'Arbeitsplatzverlust', russian: 'потеря работы', article: 'der', plural: '-', pluralArticle: '-', exampleSingular: 'Der Arbeitsplatzverlust war ein Schock für ihn.', examplePlural: '-' },
                { type: 'verb', german: 'analysieren', russian: 'анализировать', conjugation: 'ich analysiere, du analysierst', example: 'Wir müssen die Daten genau analysieren.' },
                { type: 'verb', german: 'diskutieren', russian: 'обсуждать', conjugation: 'ich diskutiere, du diskutierst', example: 'Lass uns das Problem diskutieren.' },
                { type: 'verb', german: 'beobachten', russian: 'наблюдать', conjugation: 'ich beobachte, du beobachtest', example: 'Der Detektiv beobachtet den Verdächtigen.' },
                { type: 'verb', german: 'überraschen', russian: 'удивлять', conjugation: 'ich überrasche, du überraschst', example: 'Das Ergebnis hat mich überrascht.' },
                { type: 'noun', german: 'Universität', russian: 'университет', article: 'die', plural: 'Universitäten', pluralArticle: 'die', exampleSingular: 'Sie studiert an der Humboldt-Universität.', examplePlural: 'Deutsche Universitäten haben einen guten Ruf.' },
                { type: 'noun', german: 'Studium', russian: 'обучение в вузе', article: 'das', plural: 'Studien', pluralArticle: 'die', exampleSingular: 'Das Studium dauert sechs Semester.', examplePlural: 'Es gibt viele interessante Studien.' },
                { type: 'noun', german: 'Forschung', russian: 'исследование', article: 'die', plural: 'Forschungen', pluralArticle: 'die', exampleSingular: 'Die Forschung in diesem Bereich ist wichtig.', examplePlural: 'Die Forschungen wurden publiziert.' },
                { type: 'noun', german: 'Experiment', russian: 'эксперимент', article: 'das', plural: 'Experimente', pluralArticle: 'die', exampleSingular: 'Das Experiment war erfolgreich.', examplePlural: 'Wissenschaftler machen viele Experimente.' },
                { type: 'noun', german: 'Entdeckung', russian: 'открытие', article: 'die', plural: 'Entdeckungen', pluralArticle: 'die', exampleSingular: 'Die Entdeckung Amerikas war ein wichtiges Ereignis.', examplePlural: 'Es gibt immer wieder neue wissenschaftliche Entdeckungen.' },
                { type: 'noun', german: 'Theorie', russian: 'теория', article: 'die', plural: 'Theorien', pluralArticle: 'die', exampleSingular: 'Das ist nur eine Theorie.', examplePlural: 'Es gibt verschiedene Theorien dazu.' },
                { type: 'verb', german: 'veröffentlichen', russian: 'публиковать', conjugation: 'ich veröffentliche, du veröffentlichst', example: 'Der Wissenschaftler wird seine Ergebnisse bald veröffentlichen.' },
                { type: 'noun', german: 'Technologie', russian: 'технология', article: 'die', plural: 'Technologien', pluralArticle: 'die', exampleSingular: 'Die moderne Technologie entwickelt sich schnell.', examplePlural: 'Es gibt viele neue Technologien.' },
                { type: 'noun', german: 'Digitalisierung', russian: 'цифровизация', article: 'die', plural: '-', pluralArticle: '-', exampleSingular: 'Die Digitalisierung verändert unsere Arbeitswelt.', examplePlural: '-' },
                { type: 'noun', german: 'Internet', russian: 'интернет', article: 'das', plural: '-', pluralArticle: '-', exampleSingular: 'Das Internet ist heute unverzichtbar.', examplePlural: '-' },
                { type: 'noun', german: 'soziale Medien', russian: 'социальные сети', article: 'die', plural: '(Pluralwort)', pluralArticle: '-', exampleSingular: 'Ich nutze soziale Medien, um mit Freunden in Kontakt zu bleiben.', examplePlural: 'Ich nutze soziale Medien, um mit Freunden in Kontakt zu bleiben.' },
                { type: 'noun', german: 'App', russian: 'приложение', article: 'die', plural: 'Apps', pluralArticle: 'die', exampleSingular: 'Es gibt eine App für fast alles.', examplePlural: 'Ich habe viele nützliche Apps auf meinem Handy.' },
                { type: 'noun', german: 'Computer', russian: 'компьютер', article: 'der', plural: 'Computer', pluralArticle: 'die', exampleSingular: 'Mein Computer ist kaputt.', examplePlural: 'Moderne Computer sind sehr leistungsstark.' },
                { type: 'verb', german: 'programmieren', russian: 'программировать', conjugation: 'ich programmiere, du programmierst', example: 'Er kann Webseiten programmieren.' },
                { type: 'noun', german: 'Sicherheit', russian: 'безопасность', article: 'die', plural: '-', pluralArticle: '-', exampleSingular: 'Die Sicherheit der Daten ist sehr wichtig.', examplePlural: '-' },
                { type: 'noun', german: 'Datenschutz', russian: 'защита данных', article: 'der', plural: '-', pluralArticle: '-', exampleSingular: 'Der Datenschutz ist ein wichtiges Thema.', examplePlural: '-' },
                { type: 'noun', german: 'Hacker', russian: 'хакер', article: 'der', plural: 'Hacker', pluralArticle: 'die', exampleSingular: 'Ein Hacker hat das System angegriffen.', examplePlural: 'Hacker können großen Schaden anrichten.' },
                { type: 'noun', german: 'künstliche Intelligenz', russian: 'искусственный интеллект', article: 'die', plural: '-', pluralArticle: '-', exampleSingular: 'Künstliche Intelligenz wird immer wichtiger.', examplePlural: '-' },
                { type: 'verb', german: 'automatisieren', russian: 'автоматизировать', conjugation: 'ich automatisiere, du automatisierst', example: 'Viele Prozesse in der Fabrik sind automatisiert.' },
                { type: 'noun', german: 'Innovation', russian: 'инновация', article: 'die', plural: 'Innovationen', pluralArticle: 'die', exampleSingular: 'Diese Erfindung ist eine echte Innovation.', examplePlural: 'Innovationen treiben die Wirtschaft an.' },
                { type: 'noun', german: 'Robotertechnik', russian: 'робототехника', article: 'die', plural: '-', pluralArticle: '-', exampleSingular: 'Die Robotertechnik macht große Fortschritte.', examplePlural: '-' },
              ]
            }
          ],
          exercises: []
        },
        {
          id: 'leben-reisen-umwelt',
          title: 'Жизнь, путешествия и экология',
          explanation: `
            <h2 class="font-headline text-2xl font-bold mb-4">Причастные обороты (Partizipialkonstruktionen)</h2>
            <p class="mb-4">На уровне B2 причастные обороты используются для замены придаточных предложений, делая речь более элегантной и лаконичной. Это особенно характерно для письменного языка.</p>
            <ul class="list-disc list-inside space-y-2 mb-6 bg-muted p-4 rounded-lg">
              <li><strong>Partizip I:</strong> Das <strong class="text-accent">singende</strong> Mädchen (поющая девочка) → Das Mädchen, <strong class="text-primary">das singt</strong>.</li>
              <li><strong>Partizip II:</strong> Das <strong class="text-accent">geschlossene</strong> Fenster (закрытое окно) → Das Fenster, <strong class="text-primary">das geschlossen wurde</strong>.</li>
            </ul>
             <p class="mb-4">Расширенные причастные обороты объединяют еще больше информации: "Der <strong class="text-accent">auf dem Sofa schlafende</strong> Hund..." (Собака, спящая на диване...)</p>

            <h2 class="font-headline text-2xl font-bold mb-4">Глаголы с предлогами и Pronominaladverbien</h2>
            <p class="mb-4">Мы не только учим связки "глагол + предлог", но и активно используем Pronominaladverbien (da- + предлог, wo- + предлог) для формулирования вопросов и ссылок на ранее сказанное.</p>
            <ul class="list-disc list-inside space-y-2 mb-6">
              <li>"Wartest du <strong class="text-primary">auf</strong> den Bus?" – "Ja, ich warte <strong class="text-accent">darauf</strong>."</li>
              <li>"<strong class="text-accent">Woran</strong> denkst du?" – "Ich denke <strong class="text-primary">an</strong> meinen Urlaub."</li>
            </ul>
          `,
          vocabulary: [
             {
              theme: 'Жизнь, путешествия и здоровье',
              words: [
                { type: 'noun', german: 'Einrichtung', russian: 'обстановка, меблировка', article: 'die', plural: 'Einrichtungen', pluralArticle: 'die', exampleSingular: 'Die Einrichtung der Wohnung ist sehr modern.', examplePlural: 'Öffentliche Einrichtungen sind für alle da.' },
                { type: 'noun', german: 'Gericht', russian: 'блюдо', article: 'das', plural: 'Gerichte', pluralArticle: 'die', exampleSingular: 'Was ist dein Lieblingsgericht?', examplePlural: 'Die Speisekarte bietet viele vegetarische Gerichte.' },
                { type: 'noun', german: 'Ernährung', russian: 'питание', article: 'die', plural: '-', pluralArticle: '-', exampleSingular: 'Eine gesunde Ernährung ist wichtig.', examplePlural: '-' },
                { type: 'adjective', german: 'ungesund', russian: 'нездоровый', comparative: 'ungesünder', superlative: 'am ungesündesten', example: 'Fast Food ist oft ungesund.' },
                { type: 'noun', german: 'Landschaft', russian: 'пейзаж, ландшафт', article: 'die', plural: 'Landschaften', pluralArticle: 'die', exampleSingular: 'Die Landschaft hier ist wunderschön.', examplePlural: 'Es gibt verschiedene Arten von Landschaften.' },
                { type: 'noun', german: 'Umwelt', russian: 'окружающая среда', article: 'die', plural: '-', pluralArticle: '-', exampleSingular: 'Wir müssen unsere Umwelt schützen.', examplePlural: '-' },
                { type: 'noun', german: 'Umweltschutz', russian: 'защита окружающей среды', article: 'der', plural: '-', pluralArticle: '-', exampleSingular: 'Umweltschutz ist ein wichtiges Thema.', examplePlural: '-' },
                { type: 'noun', german: 'Therapie', russian: 'терапия', article: 'die', plural: 'Therapien', pluralArticle: 'die', exampleSingular: 'Er macht eine Therapie.', examplePlural: 'Es gibt verschiedene Therapien für diese Krankheit.' },
                { type: 'noun', german: 'Prävention', russian: 'профилактика', article: 'die', plural: '-', pluralArticle: '-', exampleSingular: 'Prävention ist besser als Heilen.', examplePlural: '-' },
                { type: 'conjunction', german: 'dennoch', russian: 'тем не менее', structure: 'Порядок слов как в главном предложении (глагол на 2-м месте).', example: 'Das Wetter war schlecht, dennoch machten wir einen Spaziergang.' },
                { type: 'conjunction', german: 'jedoch', russian: 'однако', structure: 'Может стоять после глагола или в начале предложения.', example: 'Er ist reich, jedoch nicht glücklich.' },
                { type: 'conjunction', german: 'außerdem', russian: 'кроме того', structure: 'Порядок слов как в главном предложении (глагол на 2-м месте).', example: 'Ich mag Sport; außerdem ernähre ich mich gesund.' },
                { type: 'conjunction', german: 'darüber hinaus', russian: 'сверх того, кроме того', structure: 'Порядок слов как в главном предложении (глагол на 2-м месте).', example: 'Die Wohnung ist schön. Darüber hinaus ist die Miete günstig.' },
                { type: 'adverb', german: 'insbesondere', russian: 'в особенности', structure: 'Обычно стоит после глагола или в середине предложения.', example: 'Ich mag deutsche Literatur, insbesondere die Werke von Goethe.' },
              ]
            }
          ],
          exercises: []
        }
      ] 
    },
    { 
      id: 'c1', 
      title: 'Уровень C1: Профессиональный', 
      description: 'Высокий уровень владения. Вы сможете эффективно использовать язык для социальных, академических и профессиональных целей.', 
      topics: [
        {
          id: 'persoenlichkeit-gesellschaft-politik',
          title: 'Личность, общество и политика',
          explanation: `
            <h2 class="font-headline text-2xl font-bold mb-4">Konjunktiv I: язык новостей и отчетов</h2>
            <p class="mb-4">Konjunktiv I используется для <strong class="text-primary">нейтральной передачи чужих слов</strong> (косвенной речи), не выражая своего мнения. Чаще всего встречается в официальных текстах, новостях.</p>
            <p class="mb-4">Образуется от основы инфинитива с добавлением особых окончаний. Самая узнаваемая форма — 3-е лицо ед.ч. (er/sie/es), где к основе добавляется <strong class="text-accent">-e</strong>.</p>
            <div class="bg-muted p-3 rounded-lg italic my-4">Er sagt, er <strong class="text-primary">komme</strong> später. (Он говорит, что придет позже.)</div>
            <p class="mt-2">Сравните с обычным Präsens: Er kommt. Konjunktiv I показывает, что это не наши слова, а пересказ.</p>
            
            <h2 class="font-headline text-2xl font-bold mb-4">Выражение мнения и аргументация</h2>
            <p class="mb-4">На уровне C1 ключевым навыком становится способность не просто общаться, а аргументированно выражать своё мнение, взвешивать "за" и "против", а также понимать чужую точку зрения. Для этого используются сложные союзы и речевые обороты.</p>
            <ul class="list-disc list-inside space-y-2 mb-6 bg-muted p-4 rounded-lg">
              <li><strong>Двусторонние союзы:</strong> <strong class="text-primary">einerseits ... andererseits</strong> (с одной стороны... с другой стороны), <strong class="text-primary">sowohl ... als auch</strong> (как..., так и...), <strong class="text-primary">entweder ... oder</strong> (или... или...), <strong class="text-primary">weder ... noch</strong> (ни... ни...).</li>
              <li><strong>Выражение мнения:</strong> Meiner Meinung nach..., Ich bin der Ansicht, dass...</li>
              <li><strong>Аргументация:</strong> Das Hauptargument dafür ist..., Dagegen spricht, dass...</li>
            </ul>
          `,
          vocabulary: [
            {
              theme: 'Личность, общество и политика',
              words: [
                { type: 'noun', german: 'Persönlichkeit', russian: 'личность', article: 'die', plural: 'Persönlichkeiten', pluralArticle: 'die', exampleSingular: 'Jeder Mensch hat eine einzigartige Persönlichkeit.', examplePlural: 'Große Persönlichkeiten der Geschichte faszinieren mich.' },
                { type: 'noun', german: 'Verhalten', russian: 'поведение', article: 'das', plural: 'Verhaltensweisen', pluralArticle: 'die', exampleSingular: 'Sein Verhalten in der Besprechung war unprofessionell.', examplePlural: 'Es gibt kulturell bedingte Verhaltensweisen.' },
                { type: 'noun', german: 'Einstellung', russian: 'позиция, отношение', article: 'die', plural: 'Einstellungen', pluralArticle: 'die', exampleSingular: 'Eine positive Einstellung kann Berge versetzen.', examplePlural: 'Die politischen Einstellungen in der Bevölkerung sind geteilt.' },
                { type: 'noun', german: 'Motivation', russian: 'мотивация', article: 'die', plural: 'Motivationen', pluralArticle: 'die', exampleSingular: 'Ihre Motivation für den Job ist rein finanzieller Natur.', examplePlural: 'Die Motivationen der Charaktere im Roman sind komplex.' },
                { type: 'noun', german: 'Selbstbewusstsein', russian: 'уверенность в себе', article: 'das', plural: '-', pluralArticle: '-', exampleSingular: 'Durch den Erfolg wuchs sein Selbstbewusstsein.', examplePlural: '-' },
                { type: 'noun', german: 'Zuverlässigkeit', russian: 'надёжность', article: 'die', plural: '-', pluralArticle: '-', exampleSingular: 'Zuverlässigkeit ist eine wichtige Eigenschaft im Berufsleben.', examplePlural: '-' },
                { type: 'noun', german: 'Eigeninitiative', russian: 'инициативность', article: 'die', plural: '-', pluralArticle: '-', exampleSingular: 'Wir schätzen Mitarbeiter, die Eigeninitiative zeigen.', examplePlural: '-' },
                { type: 'noun', german: 'Kreativität', russian: 'креативность', article: 'die', plural: '-', pluralArticle: '-', exampleSingular: 'Für diesen Beruf braucht man viel Kreativität.', examplePlural: '-' },
                { type: 'noun', german: 'Anpassungsfähigkeit', russian: 'адаптивность', article: 'die', plural: '-', pluralArticle: '-', exampleSingular: 'In der heutigen Arbeitswelt ist Anpassungsfähigkeit entscheidend.', examplePlural: '-' },
                { type: 'adjective', german: 'empathisch', russian: 'эмпатичный', comparative: 'empathischer', superlative: 'am empathischsten', example: 'Eine gute Führungskraft sollte empathisch sein.' },
                { type: 'adjective', german: 'kritisch', russian: 'критический', comparative: 'kritischer', superlative: 'am kritischsten', example: 'Es ist wichtig, Informationen kritisch zu hinterfragen.' },
                { type: 'adjective', german: 'selbstständig', russian: 'самостоятельный', comparative: 'selbstständiger', superlative: 'am selbstständigsten', example: 'Nach dem Studium wurde er selbstständig und gründete eine Firma.' },
                { type: 'adjective', german: 'verantwortungsbewusst', russian: 'ответственный', comparative: 'verantwortungsbewusster', superlative: 'am verantwortungsbewusstesten', example: 'Sie ist eine sehr verantwortungsbewusste Mitarbeiterin.' },
                { type: 'adjective', german: 'analytisch', russian: 'аналитический', comparative: 'analytischer', superlative: 'am analytischsten', example: 'Er hat eine stark analytische Denkweise.' },
                { type: 'noun', german: 'Gesellschaft', russian: 'общество', article: 'die', plural: 'Gesellschaften', pluralArticle: 'die', exampleSingular: 'Die Gesellschaft verändert sich ständig.', examplePlural: 'Wir leben in modernen Gesellschaften.' },
                { type: 'noun', german: 'Kultur', russian: 'культура', article: 'die', plural: 'Kulturen', pluralArticle: 'die', exampleSingular: 'Ich interessiere mich für fremde Kulturen.', examplePlural: 'Die Vielfalt der Kulturen bereichert die Welt.' },
                { type: 'noun', german: 'Tradition', russian: 'традиция', article: 'die', plural: 'Traditionen', pluralArticle: 'die', exampleSingular: 'Weihnachten ist eine wichtige Tradition in Deutschland.', examplePlural: 'Jede Familie hat ihre eigenen Traditionen.' },
                { type: 'noun', german: 'Toleranz', russian: 'толерантность', article: 'die', plural: '-', pluralArticle: '-', exampleSingular: 'Toleranz gegenüber anderen Kulturen ist essenziell.', examplePlural: '-' },
                { type: 'noun', german: 'Diversität', russian: 'разнообразие', article: 'die', plural: '-', pluralArticle: '-', exampleSingular: 'Diversität in Teams fördert die Kreativität.', examplePlural: '-' },
                { type: 'noun', german: 'Solidarität', russian: 'солидарность', article: 'die', plural: '-', pluralArticle: '-', exampleSingular: 'Die Streikenden zeigten Solidarität miteinander.', examplePlural: '-' },
                { type: 'noun', german: 'Gleichberechtigung', russian: 'равноправие', article: 'die', plural: '-', pluralArticle: '-', exampleSingular: 'Die Gleichberechtigung von Männern und Frauen ist im Gesetz verankert.', examplePlural: '-' },
                { type: 'noun', german: 'Politik', russian: 'политика', article: 'die', plural: '-', pluralArticle: '-', exampleSingular: 'Die aktuelle Politik der Regierung wird stark kritisiert.', examplePlural: '-' },
                { type: 'noun', german: 'Regierung', russian: 'правительство', article: 'die', plural: 'Regierungen', pluralArticle: 'die', exampleSingular: 'Die Regierung hat ein neues Gesetz verabschiedet.', examplePlural: 'Die Regierungen der EU-Staaten treffen sich heute.' },
                { type: 'noun', german: 'Demokratie', russian: 'демократия', article: 'die', plural: 'Demokratien', pluralArticle: 'die', exampleSingular: 'Die Pressefreiheit ist ein Grundpfeiler der Demokratie.', examplePlural: 'Westliche Demokratien stehen vor neuen Herausforderungen.' },
                { type: 'noun', german: 'Wahlen', russian: 'выборы', article: 'die', plural: '(Pluralwort)', pluralArticle: '-', exampleSingular: 'Die Wahlen finden alle vier Jahre statt.', examplePlural: 'Die Wahlen finden alle vier Jahre statt.' },
                { type: 'noun', german: 'Partei', russian: 'партия', article: 'die', plural: 'Parteien', pluralArticle: 'die', exampleSingular: 'Er ist Mitglied einer politischen Partei.', examplePlural: 'Im Bundestag sind verschiedene Parteien vertreten.' },
                { type: 'noun', german: 'Gesetz', russian: 'закон', article: 'das', plural: 'Gesetze', pluralArticle: 'die', exampleSingular: 'Das Gericht handelt auf Grundlage des Gesetzes.', examplePlural: 'Neue Gesetze müssen vom Parlament beschlossen werden.' },
                { type: 'noun', german: 'Rechte', russian: 'права', article: 'die', plural: '(Pluralwort)', pluralArticle: '-', exampleSingular: 'Die Bürger haben das Recht auf freie Meinungsäußerung.', examplePlural: 'Die Bürger haben das Recht auf freie Meinungsäußerung.' },
                { type: 'noun', german: 'Pflicht', russian: 'обязанность', article: 'die', plural: 'Pflichten', pluralArticle: 'die', exampleSingular: 'Es ist die Pflicht der Eltern, für ihre Kinder zu sorgen.', examplePlural: 'Zu den Pflichten eines Mieters gehört die pünktliche Zahlung der Miete.' },
                { type: 'noun', german: 'soziale Gerechtigkeit', russian: 'социальная справедливость', article: 'die', plural: '-', pluralArticle: '-', exampleSingular: 'Das Streben nach sozialer Gerechtigkeit ist ein wichtiges politisches Ziel.', examplePlural: '-' },
                { type: 'noun', german: 'Globalisierung', russian: 'глобализация', article: 'die', plural: '-', pluralArticle: '-', exampleSingular: 'Die Globalisierung hat sowohl Vor- als auch Nachteile.', examplePlural: '-' },
                { type: 'noun', german: 'Wirtschaft', russian: 'экономика', article: 'die', plural: 'Wirtschaften', pluralArticle: 'die', exampleSingular: 'Die deutsche Wirtschaft ist exportorientiert.', examplePlural: 'Die Volkswirtschaften der Welt sind eng miteinander verflochten.' },
                { type: 'noun', german: 'Markt', russian: 'рынок', article: 'der', plural: 'Märkte', pluralArticle: 'die', exampleSingular: 'Angebot und Nachfrage regulieren den Markt.', examplePlural: 'Die internationalen Märkte reagieren nervös.' },
                { type: 'noun', german: 'Handel', russian: 'торговля', article: 'der', plural: '-', pluralArticle: '-', exampleSingular: 'Der freie Handel fördert den Wohlstand.', examplePlural: '-' },
                { type: 'noun', german: 'Investition', russian: 'инвестиция', article: 'die', plural: 'Investitionen', pluralArticle: 'die', exampleSingular: 'Eine Investition in Bildung ist eine Investition in die Zukunft.', examplePlural: 'Das Unternehmen plant große Investitionen.' },
                { type: 'noun', german: 'Steuer', russian: 'налог', article: 'die', plural: 'Steuern', pluralArticle: 'die', exampleSingular: 'Jeder Bürger muss Steuern zahlen.', examplePlural: 'Die Regierung will die Steuern erhöhen.' },
              ]
            }
          ],
          exercises: []
        },
        {
          id: 'wissenschaft-technologie-medien',
          title: 'Наука, технологии и медиа',
          explanation: `
            <h2 class="font-headline text-2xl font-bold mb-4">Futur II: предположения о будущем и прошлом</h2>
            <p class="mb-4">Futur II имеет два основных значения:</p>
            <ul class="list-disc list-inside space-y-2 mb-4 bg-muted p-4 rounded-lg">
              <li><strong>Предположение о завершенном действии в прошлом:</strong> Er wird das Buch schon <strong class="text-primary">gelesen haben</strong>. (Он, <strong class="text-accent">должно быть</strong>, уже прочитал книгу.)</li>
              <li><strong>Действие, которое завершится к моменту в будущем:</strong> Bis morgen <strong class="text-primary">werde</strong> ich die Arbeit <strong class="text-primary">beendet haben</strong>. (К завтрашнему дню я закончу работу.)</li>
            </ul>
            <p>Формула: <strong class="text-primary">werden (спряг.) + Partizip II + haben/sein (Infinitiv)</strong>.</p>
            
            <h2 class="font-headline text-2xl font-bold mb-4">Номинализация и вербализация</h2>
            <p class="mb-4">На уровне C1 важно уметь гибко переходить от глагольных конструкций к существительным (Nominalisierung) и обратно (Verbalisierung). Это признак высокого стиля.</p>
            <ul class="list-disc list-inside space-y-2 mb-6">
              <li><strong>Verbal:</strong> Man muss die Daten <strong class="text-accent">analysieren</strong>. → <strong>Nominal:</strong> <strong class="text-primary">Die Analyse</strong> der Daten ist notwendig.</li>
              <li><strong>Nominal:</strong> <strong class="text-primary">Die Veröffentlichung</strong> des Artikels... → <strong>Verbal:</strong> Man <strong class="text-accent">veröffentlicht</strong> den Artikel...</li>
            </ul>
          `,
          vocabulary: [
            {
              theme: 'Наука, технологии и медиа',
              words: [
                { type: 'noun', german: 'Studium', russian: 'учеба', article: 'das', plural: 'Studien', pluralArticle: 'die', exampleSingular: 'Das Studium der Medizin ist sehr anspruchsvoll.', examplePlural: 'Aktuelle Studien belegen den Klimawandel.' },
                { type: 'verb', german: 'bestehen', russian: 'сдавать (экзамен)', conjugation: 'ich bestehe, du bestehst, er besteht', example: 'Sie hat die Prüfung mit Bravour bestanden.' },
                { type: 'verb', german: 'durchfallen', russian: 'провалиться (на экзамене)', conjugation: 'ich falle durch, du fällst durch, er fällt durch', example: 'Er ist leider bei der praktischen Prüfung durchgefallen.' },
                { type: 'noun', german: 'Forschung', russian: 'исследование', article: 'die', plural: 'Forschungen', pluralArticle: 'die', exampleSingular: 'Die medizinische Forschung macht große Fortschritte.', examplePlural: 'Seine Forschungen sind international anerkannt.' },
                { type: 'noun', german: 'Methodik', russian: 'методика', article: 'die', plural: 'Methodiken', pluralArticle: 'die', exampleSingular: 'Die Methodik der Studie wurde kritisiert.', examplePlural: 'Es gibt verschiedene Lehrmethodiken.' },
                { type: 'noun', german: 'Hypothese', russian: 'гипотеза', article: 'die', plural: 'Hypothesen', pluralArticle: 'die', exampleSingular: 'Die Wissenschaftler müssen ihre Hypothese noch beweisen.', examplePlural: 'Es wurden mehrere Hypothesen aufgestellt.' },
                { type: 'verb', german: 'beurteilen', russian: 'оценивать, судить', conjugation: 'ich beurteile, du beurteilst', example: 'Es ist schwer, die Situation objektiv zu beurteilen.' },
                { type: 'verb', german: 'bewerten', russian: 'давать оценку, оценивать', conjugation: 'ich bewerte, du bewertest', example: 'Der Lehrer bewertet die Tests der Schüler.' },
                { type: 'noun', german: 'Bericht', russian: 'отчёт, доклад', article: 'der', plural: 'Berichte', pluralArticle: 'die', exampleSingular: 'Der Bericht wird morgen veröffentlicht.', examplePlural: 'Die Berichte über den Vorfall sind widersprüchlich.' },
                { type: 'noun', german: 'Berichterstattung', russian: 'освещение событий (в СМИ)', article: 'die', plural: '-', pluralArticle: '-', exampleSingular: 'Die Berichterstattung über die Wahl war sehr umfassend.', examplePlural: '-' },
                { type: 'noun', german: 'Artikel', russian: 'статья', article: 'der', plural: 'Artikel', pluralArticle: 'die', exampleSingular: 'Ich habe einen interessanten Artikel gelesen.', examplePlural: 'Sie schreibt Artikel für eine bekannte Zeitung.' },
                { type: 'noun', german: 'Manipulation', russian: 'манипуляция', article: 'die', plural: 'Manipulationen', pluralArticle: 'die', exampleSingular: 'Die Manipulation der öffentlichen Meinung ist eine Gefahr.', examplePlural: 'Finanzielle Manipulationen wurden aufgedeckt.' },
                { type: 'noun', german: 'Literatur', russian: 'литература', article: 'die', plural: 'Literaturen', pluralArticle: 'die', exampleSingular: 'Deutsche Literatur hat viele berühmte Autoren.', examplePlural: 'Die Literaturen der Welt sind vielfältig.' },
                { type: 'noun', german: 'Musik', russian: 'музыка', article: 'die', plural: '-', pluralArticle: '-', exampleSingular: 'Klassische Musik hilft mir, mich zu entspannen.', examplePlural: '-' },
                { type: 'noun', german: 'Theater', russian: 'театр', article: 'das', plural: 'Theater', pluralArticle: 'die', exampleSingular: 'Wir gehen heute Abend ins Theater.', examplePlural: 'Die Theater in der Stadt sind ausverkauft.' },
                { type: 'noun', german: 'Film', russian: 'фильм', article: 'der', plural: 'Filme', pluralArticle: 'die', exampleSingular: 'Der neue Film von diesem Regisseur ist ein Meisterwerk.', examplePlural: 'Ich schaue gerne alte Filme.' },
                { type: 'noun', german: 'Kunst', russian: 'искусство', article: 'die', plural: 'Künste', pluralArticle: 'die', exampleSingular: 'Moderne Kunst ist nicht immer leicht zu verstehen.', examplePlural: 'Die schönen Künste umfassen Malerei, Musik und Tanz.' },
                { type: 'noun', german: 'Ausstellung', russian: 'выставка', article: 'die', plural: 'Ausstellungen', pluralArticle: 'die', exampleSingular: 'Im Museum gibt es eine neue Ausstellung.', examplePlural: 'Ich besuche gerne Kunstausstellungen.' },
                { type: 'noun', german: 'Stil', russian: 'стиль', article: 'der', plural: 'Stile', pluralArticle: 'die', exampleSingular: 'Ihr Kleidungsstil ist sehr elegant.', examplePlural: 'In der Architektur gibt es viele verschiedene Stile.' }
              ]
            }
          ],
          exercises: []
        },
        {
          id: 'umwelt-gesundheit-reisen',
          title: 'Экология, здоровье и путешествия',
          explanation: `
            <h2 class="font-headline text-2xl font-bold mb-4">Причастные обороты: элегантные сокращения</h2>
            <p class="mb-4">Конструкции с Partizip I (причастие настоящего времени) и Partizip II (причастие прошедшего времени) позволяют заменять целые придаточные предложения, делая речь более лаконичной и элегантной.</p>
            <ul class="list-disc list-inside space-y-2 bg-muted p-4 rounded-lg">
              <li><strong>Partizip I (активное, одновременное действие):</strong> Das <strong class="text-primary">weinende</strong> Kind (плачущий ребенок) = Das Kind, <strong class="text-accent">das weint</strong>.</li>
              <li><strong>Partizip II (пассивное, предшествующее действие):</strong> Die <strong class="text-primary">geschlossene</strong> Tür (закрытая дверь) = Die Tür, <strong class="text-accent">die geschlossen wurde</strong>.</li>
            </ul>
            <p class="mt-4">Расширенные причастные обороты объединяют еще больше информации: "Der <strong class="text-accent">auf dem Sofa schlafende</strong> Hund..." (Собака, спящая на диване...)</p>
          `,
          vocabulary: [
            {
              theme: 'Экология, здоровье и путешествия',
              words: [
                { type: 'noun', german: 'Umwelt', russian: 'окружающая среда', article: 'die', plural: '-', pluralArticle: '-', exampleSingular: 'Der Schutz der Umwelt ist eine globale Aufgabe.', examplePlural: '-' },
                { type: 'noun', german: 'Umweltschutz', russian: 'охрана окружающей среды', article: 'der', plural: '-', pluralArticle: '-', exampleSingular: 'Umweltschutz beginnt bei jedem Einzelnen.', examplePlural: '-' },
                { type: 'noun', german: 'Klima', russian: 'климат', article: 'das', plural: 'Klimata', pluralArticle: 'die', exampleSingular: 'Das Klima auf der Erde verändert sich.', examplePlural: 'Tropische Klimata sind sehr feucht.' },
                { type: 'noun', german: 'Klimawandel', russian: 'изменение климата', article: 'der', plural: '-', pluralArticle: '-', exampleSingular: 'Der Klimawandel ist eine ernste Bedrohung.', examplePlural: '-' },
                { type: 'noun', german: 'erneuerbare Energie', russian: 'возобновляемая энергия', article: 'die', plural: 'erneuerbare Energien', pluralArticle: 'die', exampleSingular: 'Windkraft ist eine Form der erneuerbaren Energie.', examplePlural: 'Der Ausbau erneuerbarer Energien ist notwendig.' },
                { type: 'noun', german: 'Nachhaltigkeit', russian: 'устойчивое развитие', article: 'die', plural: '-', pluralArticle: '-', exampleSingular: 'Nachhaltigkeit bedeutet, die Bedürfnisse der Gegenwart zu befriedigen, ohne zukünftige Generationen zu gefährden.', examplePlural: '-' },
                { type: 'noun', german: 'Müll', russian: 'мусор', article: 'der', plural: '-', pluralArticle: '-', exampleSingular: 'Bitte werfen Sie den Müll in den Mülleimer.', examplePlural: '-' },
                { type: 'verb', german: 'recyceln', russian: 'перерабатывать', conjugation: 'ich recycle, du recycelst', example: 'Wir sollten mehr Müll recyceln.' },
                { type: 'noun', german: 'Ressourcen', russian: 'ресурсы', article: 'die', plural: '(Pluralwort)', pluralArticle: '-', exampleSingular: 'Die natürlichen Ressourcen der Erde sind begrenzt.', examplePlural: 'Die natürlichen Ressourcen der Erde sind begrenzt.' },
                { type: 'noun', german: 'Luftverschmutzung', russian: 'загрязнение воздуха', article: 'die', plural: '-', pluralArticle: '-', exampleSingular: 'Luftverschmutzung ist in Großstädten ein großes Problem.', examplePlural: '-' },
                { type: 'noun', german: 'Diagnose', russian: 'диагноз', article: 'die', plural: 'Diagnosen', pluralArticle: 'die', exampleSingular: 'Der Arzt stellte eine klare Diagnose.', examplePlural: 'Die Diagnosen der beiden Ärzte stimmten überein.' },
                { type: 'noun', german: 'Behandlung', russian: 'лечение', article: 'die', plural: 'Behandlungen', pluralArticle: 'die', exampleSingular: 'Die Behandlung schlägt gut an.', examplePlural: 'Es gibt verschiedene Behandlungen für diese Krankheit.' },
                { type: 'noun', german: 'Nebenwirkung', russian: 'побочный эффект', article: 'die', plural: 'Nebenwirkungen', pluralArticle: 'die', exampleSingular: 'Das Medikament hat einige Nebenwirkungen.', examplePlural: 'Lesen Sie die Packungsbeilage wegen möglicher Nebenwirkungen.' },
                { type: 'conjunction', german: 'dennoch', russian: 'тем не менее', structure: 'Порядок слов как в главном предложении (глагол на 2-м месте).', example: 'Das Wetter war schlecht, dennoch machten wir einen Spaziergang.' },
                { type: 'conjunction', german: 'jedoch', russian: 'однако', structure: 'Может стоять после глагола или в начале предложения.', example: 'Er ist reich, jedoch nicht glücklich.' },
                { type: 'conjunction', german: 'außerdem', russian: 'кроме того', structure: 'Порядок слов как в главном предложении (глагол на 2-м месте).', example: 'Ich mag Sport; außerdem ernähre ich mich gesund.' },
                { type: 'conjunction', german: 'darüber hinaus', russian: 'сверх того, кроме того', structure: 'Порядок слов как в главном предложении (глагол на 2-м месте).', example: 'Die Wohnung ist schön. Darüber hinaus ist die Miete günstig.' },
                { type: 'adverb', german: 'insbesondere', russian: 'в особенности', structure: 'Обычно стоит после глагола или в середине предложения.', example: 'Ich mag deutsche Literatur, insbesondere die Werke von Goethe.' },
              ]
            }
          ],
          exercises: []
        }
      ] 
    }
  ]
};
