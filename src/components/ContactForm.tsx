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
                    <h3 className="font-semibold mb-1">Телефон</h3>
                    <p className="text-muted-foreground">+7 (4822) 00-00-00</p>
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
                    <p className="text-muted-foreground">
                      info@zashchita-tver.ru
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Icon name="MapPin" className="text-accent mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold mb-1">Адрес</h3>
                    <p className="text-muted-foreground">
                      г. Тверь, ул. Примерная, д. 1
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Работаем по всей Тверской области
                    </p>
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
