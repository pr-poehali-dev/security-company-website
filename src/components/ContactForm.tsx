import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет обработка формы
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Свяжитесь с нами
          </h2>
          <p className="text-lg text-muted-foreground">
            Получите бесплатную консультацию по охране вашего объекта
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon
                  name="MessageSquare"
                  className="text-accent mr-2"
                  size={24}
                />
                Заявка на охрану
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Имя *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Телефон *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Сообщение</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Опишите ваш объект и требования к охране"
                    rows={4}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90"
                >
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Icon name="Phone" className="text-accent mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold mb-1">Телефоны</h3>
                    <p className="text-muted-foreground">+7 482 336-42-73</p>
                    <p className="text-muted-foreground">+7 800 250-42-73</p>
                    <p className="text-sm text-muted-foreground">
                      Круглосуточно
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Icon name="Mail" className="text-accent mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">84823364273@mail.ru</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Icon name="MapPin" className="text-accent mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold mb-1">Юридический адрес</h3>
                    <p className="text-muted-foreground">
                      171162, Тверская область, г. о. Вышневолоцкий, г. Вышний
                      Волочек, ул. Парижской Коммуны, д. 43/46
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Работаем по всей Тверской области
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4 text-primary">
                  Реквизиты организации
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="font-medium">ИНН:</span>
                      <p className="text-muted-foreground">6908004716</p>
                    </div>
                    <div>
                      <span className="font-medium">КПП:</span>
                      <p className="text-muted-foreground">690801001</p>
                    </div>
                  </div>
                  <div>
                    <span className="font-medium">ОГРН:</span>
                    <p className="text-muted-foreground">1026901602672</p>
                  </div>
                  <div>
                    <span className="font-medium">Расчетный счет:</span>
                    <p className="text-muted-foreground">
                      40702810063310000959
                    </p>
                  </div>
                  <div>
                    <span className="font-medium">Банк:</span>
                    <p className="text-muted-foreground">
                      ТВЕРСКОЕ ОТДЕЛЕНИЕ N8607 ПАО СБЕРБАНК, г. Тверь
                    </p>
                  </div>
                  <div>
                    <span className="font-medium">БИК:</span>
                    <p className="text-muted-foreground">042809679</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
              <h3 className="font-semibold text-primary mb-2">
                ⚡ Быстрая обработка заявок
              </h3>
              <p className="text-sm text-muted-foreground">
                Мы свяжемся с вами в течение 30 минут для обсуждения деталей
                охраны вашего объекта
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
