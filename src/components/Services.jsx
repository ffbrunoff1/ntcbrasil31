import { motion } from 'framer-motion';
import { Building, Hammer, HardHat, Ruler } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Building size={40} className="text-primary" />,
      title: 'Projetos Personalizados',
      description:
        'Desenvolvemos soluções únicas para cada cliente, atendendo suas necessidades específicas com excelência.',
    },
    {
      icon: <Hammer size={40} className="text-primary" />,
      title: 'Execução Profissional',
      description:
        'Equipe altamente qualificada para garantir a melhor execução do seu projeto construtivo.',
    },
    {
      icon: <HardHat size={40} className="text-primary" />,
      title: 'Gestão de Obras',
      description:
        'Gerenciamento completo do seu projeto, desde o planejamento até a entrega final.',
    },
    {
      icon: <Ruler size={40} className="text-primary" />,
      title: 'Consultoria Técnica',
      description:
        'Assessoria especializada para otimizar seus projetos e maximizar resultados.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Nossas <span className="text-primary">Soluções</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos um conjunto completo de serviços para atender todas as
            suas necessidades construtivas
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow"
            >
              <motion.div whileHover={{ scale: 1.1 }} className="mb-6">
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-2xl font-medium text-gray-700 mb-8">
            Pronto para transformar seu projeto em realidade?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-primary"
          >
            Solicite um Orçamento
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
