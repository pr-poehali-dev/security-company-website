import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Contacts = () => {
  const contacts = [
    {
      icon: "Phone",
      title: "Телефон",
      info: "+7 (4822) 00-00-00",
      description: "Круглосуточно, без выходных",
    },
    {
      icon: "Mail",
      title: "Email",
      info: "info@zashchita-tver.ru",
      description: "Ответим в течение часа",
    },
    {
      icon: "MapPin",
      title: "Адрес",
      info: "г. Тверь, ул. Примерная, д. 1",
      description: "Офис и диспетчерская",
    },
    {
      icon: "Clock",
      title: "Режим работы",
      info: "24/7",
      description: "Всегда на связи",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-6">Контакты</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Свяжитесь с нами для получения консультации по охране вашего объекта
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contacts.map((contact, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-0">
                  <Icon
                    name={contact.icon as any}
                    className="text-accent mx-auto mb-4"
                    size={40}
                  />
                  <h3 className="font-semibold text-lg mb-2">
                    {contact.title}
                  </h3>
                  <p className="font-medium text-primary mb-2">
                    {contact.info}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {contact.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-muted/50 rounded-lg p-8 mb-12">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-primary mb-4">
                Экстренная связь
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                В случае чрезвычайной ситуации звоните по номеру
              </p>
              <div className="text-3xl font-bold text-accent mb-4">
                +7 (4822) 911-911
              </div>
              <p className="text-sm text-muted-foreground">
                Диспетчерская служба работает круглосуточно
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />

      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Наше расположение
            </h2>
            <p className="text-lg text-muted-foreground">
              Центральный офис в Твери с выездом по всей области
            </p>
          </div>

          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <Icon
                name="MapPin"
                className="text-accent mx-auto mb-4"
                size={48}
              />
              <p className="text-lg font-medium text-muted-foreground">
                Интерактивная карта
              </p>
              <p className="text-sm text-muted-foreground">
                г. Тверь, ул. Примерная, д. 1
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
