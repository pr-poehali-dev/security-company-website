import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "Shield",
      title: "Физическая охрана объектов",
      description:
        "Круглосуточная охрана лицензированными охранниками 4 и 6 разрядов",
      features: [
        "Постовая служба",
        "Патрулирование территории",
        "Контроль доступа",
        "Досмотр посетителей",
      ],
      price: "от 150 руб/час",
    },
    {
      icon: "Eye",
      title: "Видеонаблюдение",
      description: "Установка и обслуживание систем видеонаблюдения",
      features: [
        "HD камеры",
        "Запись архива",
        "Удаленный просмотр",
        "Интеграция с охраной",
      ],
      price: "от 25 000 руб",
    },
    {
      icon: "Phone",
      title: "Быстрое реагирование",
      description: "Оперативная группа быстрого реагирования",
      features: [
        "Время прибытия до 15 мин",
        "Связь с полицией",
        "Круглосуточная диспетчерская",
        "Мобильные группы",
      ],
      price: "от 5 000 руб/мес",
    },
  ];

  const regions = [
    "Тверь",
    "Бологое",
    "Удомля",
    "Вышний Волочёк",
    "Торжок",
    "Ржев",
    "Кимры",
    "Конаково",
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-6">Услуги охраны</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Профессиональные услуги физической охраны для объектов любой
            сложности по всей Тверской области
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  <p className="text-2xl font-bold text-primary">
                    {service.price}
                  </p>
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
                  <Button className="w-full bg-accent hover:bg-accent/90">
                    Заказать услугу
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              География работы
            </h2>
            <p className="text-lg text-muted-foreground">
              Мы работаем по всей Тверской области
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {regions.map((region, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg text-center shadow-sm"
              >
                <Icon
                  name="MapPin"
                  className="text-accent mx-auto mb-2"
                  size={20}
                />
                <span className="font-medium">{region}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
