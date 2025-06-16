import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Contacts = () => {
  const contacts = [
    {
      icon: "Phone",
      title: "Телефоны",
      info: "+7 482 336-42-73, +7 800 250-42-73",
      description: "Круглосуточно, без выходных",
    },
    {
      icon: "Mail",
      title: "Email",
      info: "84823364273@mail.ru",
      description: "Ответим в течение часа",
    },
    {
      icon: "MapPin",
      title: "Юридический адрес",
      info: "171162, Тверская область, г. о. Вышневолоцкий, г. Вышний Волочек, ул. Парижской Коммуны, д. 43/46",
      description: "Офис и диспетчерская",
    },
    {
      icon: "Building",
      title: "Руководство",
      info: "Директор: Милюков М.А.",
      description: "С 24 января 2022 года",
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
                +7 482 336-42-73
              </div>
              <p className="text-sm text-muted-foreground">
                Диспетчерская служба работает круглосуточно
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Реквизиты и информация о компании
            </h2>
            <p className="text-lg text-muted-foreground">
              Частное охранное предприятие "Защита"
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold text-lg mb-4 text-primary">
                  Руководство
                </h3>
                <div className="space-y-3">
                  <div>
                    <span className="font-medium">Учредитель:</span>
                    <p className="text-muted-foreground">
                      Федорова Надежда Жановна
                    </p>
                    <p className="text-sm text-muted-foreground">
                      с 4 мая 2011 года
                    </p>
                  </div>
                  <div>
                    <span className="font-medium">Директор:</span>
                    <p className="text-muted-foreground">
                      Милюков Михаил Алексеевич
                    </p>
                    <p className="text-sm text-muted-foreground">
                      с 24 января 2022 года
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold text-lg mb-4 text-primary">
                  Реквизиты
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="font-medium">ИНН:</span> 6908004716
                    </div>
                    <div>
                      <span className="font-medium">КПП:</span> 690801001
                    </div>
                  </div>
                  <div>
                    <span className="font-medium">ОГРН:</span> 1026901602672
                  </div>
                  <div>
                    <span className="font-medium">Расчетный счет:</span>
                    <br />
                    40702810063310000959
                  </div>
                  <div>
                    <span className="font-medium">Банк:</span>
                    <br />
                    ТВЕРСКОЕ ОТДЕЛЕНИЕ N8607 ПАО СБЕРБАНК, г. Тверь
                  </div>
                  <div>
                    <span className="font-medium">БИК:</span> 042809679
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Наше расположение
            </h2>
            <p className="text-lg text-muted-foreground">
              Центральный офис в Вышнем Волочке с выездом по всей области
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
                171162, Тверская область, г. о. Вышневолоцкий, г. Вышний
                Волочек, ул. Парижской Коммуны, д. 43/46
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
