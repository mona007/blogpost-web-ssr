export default (ctx, inject) => {
  const helper = {
    fallbackText(str = '') {
      return str || 'N/A';
    },

    fullDateFormat(date) {
      if (!Date.parse(date)) return '';

      /** new Date javascript will get timezone from user pc */
      const d = new Date(date);
      const year = d.getFullYear();
      const month = `0${d.getMonth() + 1}`.slice(-2);
      const day = `0${d.getDate()}`.slice(-2);
      const hour = d.getHours();
      const hour12 = `0${d.getHours() % 12}`.slice(-2);
      const minute = `0${d.getMinutes()}`.slice(-2);
      const a = +hour > 12 ? 'PM' : 'AM';
      return `${year}-${month}-${day} ${hour12}:${minute}${a}`;
    },

    shortDateFormat(date) {
      if (!Date.parse(date)) return '';

      /** new Date javascript will get timezone from user pc */
      const d = new Date(date);
      const year = d.getFullYear();
      const month = `0${d.getMonth() + 1}`.slice(-2);
      const day = `0${d.getDate()}`.slice(-2);
      return `${year}-${month}-${day}`;
    },

    currencyFormat(num, currency = 'USD') {
      if (!num) return null;

      const format = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency,
        currencyDisplay: 'narrowSymbol',
      }).format(num);
      return format.replace('USD', '').trim();
    },

    fileSizeFormat(size) {
      /** size in byte */
      let str = `${size}bytes`;

      if (size > 1024 * 1024) {
        str = `${(size / (1024 * 1024)).toFixed(2)}MB`;
      } else if (size > 1024) {
        str = `${(size / 1024).toFixed(2)}KB`;
      }

      return str;
    },

    getPublicUrl(key) {
      if (!key && !key.key) return '';
      return `${ctx.env.NUXT_ENV_PUBLIC_PATH || ''}${key.key || key}`;
    },
  };

  inject('helper', helper);
};
