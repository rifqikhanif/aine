let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ •  [088227606701]
╰────
╭─「 Donasi • Gopay 」
│ •  [088227606701]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler