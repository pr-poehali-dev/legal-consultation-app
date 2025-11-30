import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Calendar } from '@/components/ui/calendar';

type Section = 'consultations' | 'documents' | 'payments' | 'profile' | 'clients' | 'calendar' | 'reference';

const Index = () => {
  const [activeSection, setActiveSection] = useState<Section>('consultations');
  const [date, setDate] = useState<Date | undefined>(new Date());

  const navigationItems = [
    { id: 'consultations' as Section, label: 'Консультации', icon: 'MessageSquare' },
    { id: 'documents' as Section, label: 'Документы', icon: 'FileText' },
    { id: 'payments' as Section, label: 'Платежи', icon: 'CreditCard' },
    { id: 'clients' as Section, label: 'Клиенты', icon: 'Users' },
    { id: 'calendar' as Section, label: 'Календарь', icon: 'Calendar' },
    { id: 'reference' as Section, label: 'Справочник', icon: 'BookOpen' },
    { id: 'profile' as Section, label: 'Профиль', icon: 'User' },
  ];

  const consultations = [
    { id: 1, client: 'Иванов Петр', case: 'Трудовой спор', status: 'active', nextMeeting: '2025-12-01 14:00', priority: 'high' },
    { id: 2, client: 'Смирнова Анна', case: 'Защита прав потребителей', status: 'active', nextMeeting: '2025-12-02 10:00', priority: 'medium' },
    { id: 3, client: 'ООО "Альфа"', case: 'Корпоративное право', status: 'pending', nextMeeting: '2025-12-03 16:00', priority: 'low' },
  ];

  const clients = [
    { id: 1, name: 'Иванов Петр Сергеевич', cases: 2, status: 'active', phone: '+7 (999) 123-45-67' },
    { id: 2, name: 'Смирнова Анна Владимировна', cases: 1, status: 'active', phone: '+7 (999) 234-56-78' },
    { id: 3, name: 'ООО "Альфа"', cases: 3, status: 'pending', phone: '+7 (999) 345-67-89' },
    { id: 4, name: 'Петров Михаил Иванович', cases: 1, status: 'completed', phone: '+7 (999) 456-78-90' },
  ];

  const upcomingMeetings = [
    { time: '14:00', client: 'Иванов П.', type: 'Видеоконсультация', date: '01.12.2025' },
    { time: '10:00', client: 'Смирнова А.', type: 'Очная встреча', date: '02.12.2025' },
    { time: '16:00', client: 'ООО "Альфа"', type: 'Видеоконсультация', date: '03.12.2025' },
  ];

  const documents = [
    { id: 1, name: 'Исковое заявление - Иванов П.', date: '25.11.2025', type: 'Иск', status: 'На подписании' },
    { id: 2, name: 'Договор консультирования - Смирнова А.', date: '20.11.2025', type: 'Договор', status: 'Подписан' },
    { id: 3, name: 'Доверенность - ООО "Альфа"', date: '18.11.2025', type: 'Доверенность', status: 'В работе' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'pending': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'completed': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'medium': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'low': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
      <aside className="w-64 border-r border-border bg-card p-6 flex flex-col">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Icon name="Scale" size={28} className="text-primary" />
            LegalHub
          </h1>
          <p className="text-sm text-muted-foreground mt-1">Юридическая платформа</p>
        </div>

        <nav className="flex-1 space-y-1">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-md transition-all ${
                activeSection === item.id
                  ? 'bg-primary text-primary-foreground font-medium'
                  : 'text-muted-foreground hover:bg-accent hover:text-foreground'
              }`}
            >
              <Icon name={item.icon} size={20} />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="mt-auto pt-6 border-t border-border">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarFallback className="bg-primary text-primary-foreground">АС</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">Александр Соколов</p>
              <p className="text-xs text-muted-foreground">Юрист-консультант</p>
            </div>
          </div>
        </div>
      </aside>

      <main className="flex-1 p-8 overflow-auto">
        {activeSection === 'consultations' && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold text-foreground">Консультации</h2>
                <p className="text-muted-foreground mt-1">Активные дела и встречи с клиентами</p>
              </div>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Icon name="Plus" size={20} className="mr-2" />
                Новая консультация
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {consultations.map((consultation) => (
                <Card key={consultation.id} className="border-border hover:border-primary/50 transition-all">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback className="bg-muted text-muted-foreground">
                            {consultation.client.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-lg">{consultation.client}</CardTitle>
                          <p className="text-sm text-muted-foreground mt-1">{consultation.case}</p>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex gap-2">
                      <Badge className={getStatusColor(consultation.status)}>
                        {consultation.status === 'active' ? 'Активно' : 'Ожидает'}
                      </Badge>
                      <Badge className={getPriorityColor(consultation.priority)}>
                        {consultation.priority === 'high' ? 'Высокий' : consultation.priority === 'medium' ? 'Средний' : 'Низкий'}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="Calendar" size={16} />
                      <span>{consultation.nextMeeting}</span>
                    </div>
                    <Button className="w-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground border border-primary/30">
                      <Icon name="Video" size={18} className="mr-2" />
                      Видеозвонок
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Clock" size={20} />
                  Предстоящие встречи
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {upcomingMeetings.map((meeting, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 rounded-lg bg-muted/30 border border-border">
                      <div className="flex items-center gap-4">
                        <div className="text-center">
                          <p className="text-2xl font-bold text-primary">{meeting.time}</p>
                          <p className="text-xs text-muted-foreground">{meeting.date}</p>
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{meeting.client}</p>
                          <p className="text-sm text-muted-foreground">{meeting.type}</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Icon name="Video" size={20} />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'documents' && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold text-foreground">Документы</h2>
                <p className="text-muted-foreground mt-1">Управление юридическими документами</p>
              </div>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Icon name="Upload" size={20} className="mr-2" />
                Загрузить документ
              </Button>
            </div>

            <div className="grid gap-4">
              {documents.map((doc) => (
                <Card key={doc.id} className="border-border hover:border-primary/50 transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <Icon name="FileText" size={24} className="text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{doc.name}</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            {doc.type} • {doc.date}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge variant="outline">{doc.status}</Badge>
                        <Button variant="ghost" size="sm">
                          <Icon name="Download" size={18} />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'clients' && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold text-foreground">Клиенты</h2>
                <p className="text-muted-foreground mt-1">База клиентов и их дела</p>
              </div>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Icon name="UserPlus" size={20} className="mr-2" />
                Добавить клиента
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {clients.map((client) => (
                <Card key={client.id} className="border-border hover:border-primary/50 transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-12 w-12">
                          <AvatarFallback className="bg-primary/20 text-primary text-lg">
                            {client.name.split(' ').slice(0, 2).map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold text-foreground">{client.name}</h3>
                          <p className="text-sm text-muted-foreground">{client.phone}</p>
                        </div>
                      </div>
                      <Badge className={getStatusColor(client.status)} variant="outline">
                        {client.status === 'active' ? 'Активен' : client.status === 'pending' ? 'Ожидает' : 'Завершен'}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="Briefcase" size={16} />
                        <span>{client.cases} {client.cases === 1 ? 'дело' : 'дела'}</span>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Icon name="Eye" size={18} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'calendar' && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <h2 className="text-3xl font-bold text-foreground">Календарь</h2>
              <p className="text-muted-foreground mt-1">Планирование встреч и консультаций</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border-border">
                <CardContent className="p-6">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md"
                  />
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle>События на выбранную дату</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {upcomingMeetings.map((meeting, idx) => (
                    <div key={idx} className="p-4 rounded-lg bg-muted/30 border border-border">
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-semibold text-foreground">{meeting.time}</p>
                        <Badge variant="outline">{meeting.type}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{meeting.client}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeSection === 'payments' && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold text-foreground">Платежи</h2>
                <p className="text-muted-foreground mt-1">История платежей и счета</p>
              </div>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Icon name="Plus" size={20} className="mr-2" />
                Создать счет
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-sm font-medium text-muted-foreground">Ожидается</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-yellow-400">₽ 250,000</p>
                  <p className="text-sm text-muted-foreground mt-2">3 счета в ожидании</p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-sm font-medium text-muted-foreground">Получено</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-green-400">₽ 820,000</p>
                  <p className="text-sm text-muted-foreground mt-2">12 счетов оплачено</p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-sm font-medium text-muted-foreground">Просрочено</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-red-400">₽ 45,000</p>
                  <p className="text-sm text-muted-foreground mt-2">1 счет просрочен</p>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeSection === 'reference' && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <h2 className="text-3xl font-bold text-foreground">Справочник</h2>
              <p className="text-muted-foreground mt-1">Правовая база и документация</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {['Трудовое право', 'Гражданское право', 'Корпоративное право', 'Налоговое право', 'Семейное право', 'Административное право'].map((category) => (
                <Card key={category} className="border-border hover:border-primary/50 transition-all cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Icon name="BookOpen" size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{category}</h3>
                        <p className="text-sm text-muted-foreground">45 статей</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'profile' && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <h2 className="text-3xl font-bold text-foreground">Профиль</h2>
              <p className="text-muted-foreground mt-1">Настройки учетной записи</p>
            </div>

            <Card className="border-border">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <Avatar className="h-24 w-24">
                    <AvatarFallback className="bg-primary text-primary-foreground text-3xl">АС</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">Александр Соколов</h3>
                      <p className="text-muted-foreground">Юрист-консультант</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p className="font-medium">a.sokolov@legalhub.ru</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Телефон</p>
                        <p className="font-medium">+7 (999) 000-00-00</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Специализация</p>
                        <p className="font-medium">Трудовое право</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Опыт работы</p>
                        <p className="font-medium">8 лет</p>
                      </div>
                    </div>
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                      <Icon name="Settings" size={18} className="mr-2" />
                      Редактировать профиль
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;