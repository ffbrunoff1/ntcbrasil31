import { motion } from 'framer-motion';
import { Building2, Target, ShieldCheck } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Building2 size={32} className="text-primary" />,
      title: 'Experiência Comprovada',
      description:
        'Anos de expertise no setor de construção, entregando projetos de alta qualidade.',
    },
    {
      icon: <Target size={32} className="text-primary" />,
      title: 'Foco em Resultados',
      description:
        'Comprometimento com prazos e metas, garantindo a satisfação total dos clientes.',
    },
    {
      icon: <ShieldCheck size={32} className="text-primary" />,
      title: 'Qualidade Garantida',
      description:
        'Processos rigorosos de controle de qualidade em todas as etapas do projeto.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Sobre a <span className="text-primary">NTC Brasil</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos especializados em soluções de construção inovadoras e de alta
            qualidade, focados em atender as necessidades do mercado brasileiro
            com eficiência e responsabilidade.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <motion.div whileHover={{ scale: 1.1 }} className="mb-6">
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
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
            "Construímos sonhos com solidez e compromisso"
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-primary"
          >
            Entre em Contato
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
