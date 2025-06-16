import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary to-primary/90 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Профессиональная охрана с 1997 года
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Более 700 защищённых объектов в Тверской области. Круглосуточная
              физическая охрана лицензированными специалистами.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white"
              >
                Заказать охрану
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Узнать больше
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="p-6 text-center">
              <Icon
                name="Shield"
                className="text-primary mx-auto mb-3"
                size={40}
              />
              <h3 className="font-semibold text-lg text-primary mb-2">700+</h3>
              <p className="text-sm text-muted-foreground">
                Защищённых объектов
              </p>
            </Card>
            <Card className="p-6 text-center">
              <Icon
                name="Clock"
                className="text-accent mx-auto mb-3"
                size={40}
              />
              <h3 className="font-semibold text-lg text-primary mb-2">24/7</h3>
              <p className="text-sm text-muted-foreground">
                Круглосуточная охрана
              </p>
            </Card>
            <Card className="p-6 text-center">
              <Icon
                name="Users"
                className="text-primary mx-auto mb-3"
                size={40}
              />
              <h3 className="font-semibold text-lg text-primary mb-2">
                26 лет
              </h3>
              <p className="text-sm text-muted-foreground">Опыт работы</p>
            </Card>
            <Card className="p-6 text-center">
              <Icon
                name="Award"
                className="text-accent mx-auto mb-3"
                size={40}
              />
              <h3 className="font-semibold text-lg text-primary mb-2">4-6</h3>
              <p className="text-sm text-muted-foreground">
                Разряды охранников
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
