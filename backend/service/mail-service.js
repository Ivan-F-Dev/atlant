class MailService {
    async sendActivationMail(to, link) {
        console.log('sendActivationMail: ', {to,link})
    }
}

export default new MailService()