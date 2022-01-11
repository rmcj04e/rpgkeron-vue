<template>
<div>
  <div class="ui-block-basic rules">
    <div class="ui-block-content column-content-direction">
      <div class="ui-tab-controller rules-controller">
        <button class="ui-tab-button active" tab-select="1"><i class="ui-icon ui-icon-home-tab"></i>
          <div class="ui-name-tab">Основные правила</div>
        </button>
        <button class="ui-tab-button" tab-select="2"><i class="ui-icon ui-icon-moderate-tab"></i>
          <div class="ui-name-tab">Правила для модераторов</div>
        </button>
      </div>
      <div class="ui-tab-container rules-controller">
        <div class="ui-tab-block rules-ui-tab-block" tab="1">
          <div class="rules-block">
            <div class="rules-block-title">Общие правила проекта</div>
            <div class="rules-block-content">
              <div class="rules-group">
                <div class="title">0.1</div>
                <div class="description">Регистрируя аккаунт на нашем проекте, пользователь подтверждает свою ознакомленность и согласие с нижеизложенными положениями и правилами игры, пользователь подтверждает согласие на сбор и обработку неперсонализированных технических данных, а также данных, присущих особенностям функционирования в сети Интернет. Пользователь подтверждает, что незнание им (пользователем) правил не освобождает его (пользователя) от ответственности.</div>
                <div class="notice simple">Администрация проекта оставляет за собой право изменять любые пункты правил без оповещения и предупреждения игроков.</div>
              </div>
              <div class="rules-group">
                <div class="title">0.2</div>
                <div class="description">Проект является бесплатной и некоммерческой структурой, предоставляющей игровые услуги. Любая финансовая поддержка пользователем осуществляется на добровольной основе и идет на улучшение качества предоставляемых услуг. Возврат пожертвованных средств не предусматривается ни при каких условиях.</div>
              </div>
              <div class="rules-group">
                <div class="title">0.3</div>
                <div class="description">Пользователь несет ответственность за безопасность своего аккаунта и обязуется соблюдать все надлежащие меры по обеспечению его безопасности. Независимо от того, кем были совершены действия на аккаунте, ответственность всегда несет его владелец.</div>
                <div class="notice simple">Администрация проекта оставляет за собой право отказать в восстановлении доступа к аккаунту в случае взлома.</div>
              </div>
              <div class="rules-group">
                <div class="title">0.4</div>
                <div class="description">Администрация имеет право вмешиваться в игровой процесс в любое время и действовать “по ситуации” в том случае, если сочтет это необходимым. В спорных ситуациях последнее слово остается за администрацией проекта.</div>
                <div class="notice simple">Под “администрацией проекта” подразумеваются помощники администратора и основатель проекта. Они полностью отвечают за правила и игровой процесс.</div>
              </div>
              <div class="rules-group">
                <div class="title">0.5</div>
                <div class="description">Администрация и модерация проекта не несут ответственности и ни при каких условиях не обязаны возвращать игрокам ресурсы или игровую валюту, утраченные в ходе обмана, гриферства, отката, бага, дюпа, читерства, взлома и обмена без модератора.</div>
              </div>
              <div class="rules-group">
                <div class="title">0.6</div>
                <div class="description">Перенос привилегий может быть осуществлен при условии, что игровые пакеты ресурсов не были использованы, а с момента приобретения прошло не более 24 часов.</div>
              </div>
              <div class="rules-group">
                <div class="title">0.7</div>
                <div class="description">Любые сторонние ресурсы связи, к примеру, ВКонтакте или Discord не имеют никакого отношения к игровому процессу и доказательства, основанные на этом, не рассматриваются.</div>
              </div>
            </div>
          </div>
          <div class="rules-block">
            <div class="rules-block-title">Правила чата</div>
            <div class="rules-block-content">
              <div class="rules-group">
                <div class="title">1.0</div>
                <div class="description">Запрещено развязывать конфликты на основе национальностей и религий.</div>
                <div class="notice red"><b>Наказание:</b> блокировка чата на 1 час.</div>
              </div>
              <div class="rules-group">
                <div class="title">1.1</div>
                <div class="description">Запрещено писать сообщения, не несущие смысловой нагрузки.</div>
                <div class="notice red"><b>Наказание:</b> блокировка чата на 15 минут.</div>
              </div>
              <div class="rules-group">
                <div class="title">1.2</div>
                <div class="description">Запрещено писать идентичные и одинаковые по смыслу сообщения, а также использовать более пяти повторяющихся символов или букв подряд в одном сообщении.</div>
                <div class="notice simple">Примечание: если на ваш вопрос не поступило ответа, то скорее всего на момент его отправки на сервере нет игроков, которые могут дать на него ответ. Большая часть информации по игровому процессу находится в интернете в свободном доступе, её без труда можно найти самому.</div>
                <div class="notice red"><b>Наказание:</b> блокировка чата от 15 минут до 6 часов.</div>
              </div>
              <div class="rules-group">
                <div class="title">1.3</div>
                <div class="description">Запрещено агрессивное общение, провокации игроков, насмешки и различные угрозы.</div>
                <div class="notice red"><b>Наказание:</b> блокировка чата от 1 часа до 6 часов.</div>
              </div>
              <div class="rules-group">
                <div class="title">1.4</div>
                <div class="description">Запрещено выпрашивать, просить в долг ресурсы и валюту.</div>
                <div class="notice simple">Примечание: фраза "у кого есть лишние ресурсы" и ей подобные рассчитываются как нарушения данного правила. Если вы хотите приобрести какую-либо вещь, то пишите об этом в торговый чат.</div>
                <div class="notice red"><b>Наказание:</b> блокировка чата на 1 час.</div>
              </div>
              <div class="rules-group">
                <div class="title">1.5</div>
                <div class="description">Запрещено выпрашивать, просить в долг ресурсы и валюту.</div>
                <div class="notice red"><b>Наказание:</b> тюрьма на 30 минут.</div>
              </div>
              <div class="rules-group">
                <div class="title">1.6</div>
                <div class="description">Запрещается любое использование капса (верхнего регистра) в сообщениях.</div>
                <div class="notice simple">Исключения: имена собственные, заглавные буквы, аббревиатуры, текстовые смайлы и две первые буквы в начале предложения (Пример: ПРивет)</div>
                <div class="notice red"><b>Наказание:</b> блокировка чата на 1 час.</div>
              </div>
            </div>
          </div>
        </div>
        <div class="ui-tab-block rules-ui-tab-block" tab="2">
          <div class="rules-block">
            <div class="rules-block-title">А тут пока ничего нету..</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Rules"
}
</script>
