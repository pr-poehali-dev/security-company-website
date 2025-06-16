import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "Shield",
      title: "Физическая охрана объектов",
      description:
        "Круглосуточная охрана лицензированными специалистами 4 и 6 разрядов",
      features: ["Постовая служба", "Патрулирование", "Контроль доступа"],
    },
    {
      icon: "Eye",
      title: "Видеонаблюдение",
      description:
        "Современные системы видеонаблюдения с удаленным мониторингом",
      features: ["HD камеры", "Запись архива", "Мобильное приложение"],
    },
    {
      icon: "Phone",
      title: "Быстрое реагирование",
      description:
        "Оперативная группа быстрого реагирования на экстренные вызовы",
      features: [
        "Время прибытия до 15 мин",
        "Связь с полицией",
        "Круглосуточная диспетчерская",
      ],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">Наши услуги</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Комплексные решения для обеспечения безопасности вашего бизнеса
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-4">
                <Icon
                  name={service.icon as any}
                  className="text-accent mx-auto mb-4"
                  size={48}
                />
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 text-center">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <Icon
                        name="Check"
                        className="text-accent mr-2"
                        size={16}
                      />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant="outline">
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
