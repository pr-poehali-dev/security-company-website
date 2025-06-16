import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const About = () => {
  const timeline = [
    { year: "1997", event: "Основание предприятия 14 апреля" },
    { year: "2000", event: "Первые 50 защищённых объектов" },
    { year: "2010", event: "Расширение до 300 объектов" },
    { year: "2020", event: "Внедрение современных технологий" },
    { year: "2023", event: "Более 700 защищённых объектов" },
  ];

  const team = [
    {
      role: "Руководитель службы безопасности",
      experience: "15+ лет",
      education: "Высшее образование",
    },
    { role: "Старший охранник", experience: "10+ лет", education: "6 разряд" },
    {
      role: "Диспетчер",
      experience: "8+ лет",
      education: "Специализированные курсы",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-6">О компании</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            26 лет надёжной защиты и профессионального сервиса
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Наша история
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Частное охранное предприятие "Защита" начало свою деятельность
                14 апреля 1997 года и продолжает работать по сей день при
                сотрудничестве с партнёрами.
              </p>
              <p className="text-muted-foreground mb-6">
                За 26 лет работы мы предоставили безопасность более чем 700
                объектам по территории Тверской области, включая такие города
                как Бологое, Удомля, Вышний Волочёк и другие.
              </p>
              <div className="bg-accent/10 border-l-4 border-accent p-4 rounded">
                <p className="font-medium text-accent">
                  Даже самая современная сигнализация не заменит человека на
                  посту
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-sm">
                    {item.year}
                  </div>
                  <p className="text-muted-foreground">{item.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Наша команда
            </h2>
            <p className="text-lg text-muted-foreground">
              Опытные специалисты с лицензиями и необходимой подготовкой
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="p-0">
                  <Icon
                    name="User"
                    className="text-primary mx-auto mb-4"
                    size={48}
                  />
                  <h3 className="font-semibold text-lg mb-2">{member.role}</h3>
                  <p className="text-accent font-medium mb-2">
                    Опыт: {member.experience}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {member.education}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Наши принципы
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6">
              <Icon
                name="Heart"
                className="text-accent mx-auto mb-4"
                size={40}
              />
              <h3 className="font-semibold mb-2">Индивидуальный подход</h3>
              <p className="text-sm text-muted-foreground">
                К каждому клиенту и объекту
              </p>
            </Card>

            <Card className="text-center p-6">
              <Icon
                name="Award"
                className="text-accent mx-auto mb-4"
                size={40}
              />
              <h3 className="font-semibold mb-2">Высокое качество</h3>
              <p className="text-sm text-muted-foreground">
                Предоставляемых услуг
              </p>
            </Card>

            <Card className="text-center p-6">
              <Icon name="Zap" className="text-accent mx-auto mb-4" size={40} />
              <h3 className="font-semibold mb-2">Современные технологии</h3>
              <p className="text-sm text-muted-foreground">
                И методы обеспечения безопасности
              </p>
            </Card>

            <Card className="text-center p-6">
              <Icon
                name="Shield"
                className="text-accent mx-auto mb-4"
                size={40}
              />
              <h3 className="font-semibold mb-2">Надёжность</h3>
              <p className="text-sm text-muted-foreground">
                Проверенная годами работы
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
