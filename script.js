document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll para a navegação
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Botão "Saiba Mais" na seção Hero
    const saibaMaisBtn = document.getElementById('saibaMaisBtn');
    if (saibaMaisBtn) {
        saibaMaisBtn.addEventListener('click', () => {
            document.querySelector('#sobre').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // Lidar com o envio do formulário de contato
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Impede o envio padrão do formulário

            // Simula o envio de dados
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const mensagem = document.getElementById('mensagem').value;

            // Aqui você faria uma requisição AJAX para um backend real
            // Por exemplo, usando fetch():
            /*
            fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ nome, email, mensagem })
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    formMessage.textContent = 'Sua mensagem foi enviada com sucesso!';
                    formMessage.className = 'message success';
                    contactForm.reset(); // Limpa o formulário
                } else {
                    formMessage.textContent = 'Ocorreu um erro ao enviar sua mensagem. Tente novamente.';
                    formMessage.className = 'message error';
                }
            })
            .catch(error => {
                console.error('Erro:', error);
                formMessage.textContent = 'Erro de conexão. Por favor, tente mais tarde.';
                formMessage.className = 'message error';
            });
            */

            // Para este exemplo, vamos apenas simular o sucesso/erro
            // Em uma aplicação real, você faria a validação e o envio para um servidor
            setTimeout(() => {
                if (nome && email && mensagem) {
                    formMessage.textContent = 'Sua mensagem foi enviada com sucesso! Em breve entraremos em contato.';
                    formMessage.className = 'message success';
                    contactForm.reset(); // Limpa o formulário após o "envio"
                } else {
                    formMessage.textContent = 'Por favor, preencha todos os campos.';
                    formMessage.className = 'message error';
                }
            }, 1000); // Simula um pequeno atraso de rede
        });
    }
});