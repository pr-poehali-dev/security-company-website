import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const About = () => {
  const achievements = [
    {
      icon: "Calendar",
      title: "С 1997 года",
      description: "Основано 14 апреля 1997 года",
    },
    {
      icon: "Shield",
      title: "700+ объектов",
      description: "Защищено по Тверской области",
    },
    {
      icon: "MapPin",
      title: "Широкая география",
      description: "Бологое, Удомля, Вышний Волочёк и др.",
    },
    {
      icon: "Users",
      title: "Опытная команда",
      description: "Лицензированные специалисты",
    },
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">
              О частном охранном предприятии "Защита"
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Наше предприятие начало свою деятельность 14 апреля 1997 года и
              продолжает работать по сей день при сотрудничестве с партнёрами.
            </p>
            <p className="text-muted-foreground mb-8">
              Мы предоставили безопасность более чем 700 объектам по территории
              Тверской области. Даже самая современная сигнализация не заменит
              человека на посту. Физическая охрана объектов необходима для
              минимизации рисков и усиления безопасности.
            </p>
            <div className="bg-accent/10 border-l-4 border-accent p-4 rounded">
              <p className="text-sm font-medium">
                Мы гарантируем индивидуальный подход к каждому клиенту и высокое
                качество предоставляемых услуг.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {achievements.map((item, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-md transition-shadow"
              >
                <CardContent className="p-0">
                  <Icon
                    name={item.icon as any}
                    className="text-primary mx-auto mb-3"
                    size={32}
                  />
                  <h3 className="font-semibold text-lg text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
