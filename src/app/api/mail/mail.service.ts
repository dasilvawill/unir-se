import { sendMail } from "@/utils/mail.utils";

export async function sendEmail(name: string, email: string, token: string) {
  const sender = {
    name: "Unir-se",
    address: "no-reply@example.com",
  };

  const receipients = [
    {
      name: name,
      address: email,
    },
  ];

  const htmlMessage = `
  <div
    style="
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      color: #333;
      margin: 0;
      padding: 0;
    "
  >
    <table
      cellpadding="0"
      cellspacing="0"
      width="100%"
      border="0"
      align="center"
      style="
        max-width: 600px;
        background-color: #ffffff;
        padding: 20px;
        border-collapse: collapse;
      "
    >
      <tr>
        <td align="center" style="padding: 20px 0">
          <img
            src="https://via.placeholder.com/100"
            alt="Logo"
            style="width: 100px"
          />
        </td>
      </tr>
      <tr>
        <td align="center" style="padding: 20px">
          <h1 style="font-size: 24px; color: #333; margin: 0">
            Bem-vindo ao Nosso Sistema!
          </h1>
          <p
            style="
              font-size: 16px;
              color: #666;
              line-height: 1.5;
              margin: 20px 0;
            "
          >
            Olá,<br /><br />
            Estamos muito felizes em ter você conosco. Para começar a usar o
            nosso sistema, por favor, configure sua senha clicando no botão
            abaixo.
          </p>
          <table
            role="presentation"
            cellpadding="0"
            cellspacing="0"
            border="0"
            align="center"
            style="margin: 30px 0"
          >
            <tr>
              <td align="center" bgcolor="#28a745" style="border-radius: 5px">
                <a
                  href="http://localhost:3000/change-password/${token}"
                  style="
                    color: #ffffff;
                    display: inline-block;
                    padding: 15px 25px;
                    text-decoration: none;
                    font-size: 16px;
                    font-weight: bold;
                  "
                  >Cadastrar Senha</a
                >
              </td>
            </tr>
          </table>
          <p style="font-size: 16px; color: #666; line-height: 1.5">
            Se você não se inscreveu em nosso sistema, por favor, ignore este
            email.
          </p>
        </td>
      </tr>
      <tr>
        <td align="center" style="padding: 20px; font-size: 12px; color: #999">
          &copy; 2024 Nosso Sistema. Todos os direitos reservados.<br />
          Você está recebendo este email porque se inscreveu no nosso sistema.
        </td>
      </tr>
    </table>
  </div>
  `;

  try {
    const result = await sendMail({
      sender,
      receipients,
      subject: "Acesso ao Unir-se: Cadastre sua senha",
      message: htmlMessage,
    });
    return Response.json({
      accepted: result.accepted,
    });
  } catch (error) {
    return Response.json(
      { message: "Impossivel enviar email agora" },
      {
        status: 500,
      },
    );
  }
}
