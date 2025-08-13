import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaSmartphone, FaRocket, FaGraduationCap, FaWhatsapp, FaStar, FaPlay, FaDesktop, FaDatabase, FaCloud, FaPaintBrush, FaUsers, FaLightbulb, FaHeart, FaGlobe, FaShieldAlt } from 'react-icons/fa';

const whatsappLink = "https://wa.me/22943050611?text=Salut%20KEJA%20Academy%2C%20je%20souhaite%20commencer%20ma%20formation%20pour%20créer%20des%20Web%20Apps%20professionnelles%20!";

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* NAVBAR FIXE */}
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div 
              className="h-8 w-8 rounded-lg bg-gradient-to-br from-green-400 to-green-600"
              animate={{
                rotate: [0, 5, -5, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            <span className="text-xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              KEJA Academy
            </span>
          </motion.div>
          
          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-lg shadow-green-500/30"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(34, 197, 94, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            Contact
          </motion.a>
        </div>
      </motion.nav>

      {/* ICÔNES ANIMÉES EN ARRIÈRE-PLAN */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div className="absolute top-20 left-10" animate={{ rotate: 360, y: [0, -20, 0] }} transition={{ duration: 8, repeat: Infinity }}>
          <FaCode className="text-gray-800 text-4xl" />
        </motion.div>
        <motion.div className="absolute top-32 right-20" animate={{ rotate: -360, x: [0, 20, 0] }} transition={{ duration: 6, repeat: Infinity }}>
          <FaSmartphone className="text-gray-800 text-3xl" />
        </motion.div>
        <motion.div className="absolute top-60 left-1/4" animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }} transition={{ duration: 10, repeat: Infinity }}>
          <FaDesktop className="text-gray-800 text-5xl" />
        </motion.div>
        <motion.div className="absolute top-80 right-1/3" animate={{ y: [0, -30, 0], rotate: [0, -90, 0] }} transition={{ duration: 7, repeat: Infinity }}>
          <FaDatabase className="text-gray-800 text-4xl" />
        </motion.div>
        <motion.div className="absolute bottom-40 left-16" animate={{ rotate: 360, scale: [1, 1.3, 1] }} transition={{ duration: 9, repeat: Infinity }}>
          <FaCloud className="text-gray-800 text-6xl" />
        </motion.div>
        <motion.div className="absolute bottom-60 right-24" animate={{ x: [0, -25, 0], y: [0, 15, 0] }} transition={{ duration: 5, repeat: Infinity }}>
          <FaPaintBrush className="text-gray-800 text-3xl" />
        </motion.div>
        <motion.div className="absolute bottom-32 left-1/3" animate={{ rotate: -360, scale: [1, 0.8, 1] }} transition={{ duration: 8, repeat: Infinity }}>
          <FaGlobe className="text-gray-800 text-5xl" />
        </motion.div>
        <motion.div className="absolute top-1/2 left-8" animate={{ y: [0, -40, 0], x: [0, 10, 0] }} transition={{ duration: 6, repeat: Infinity }}>
          <FaLightbulb className="text-gray-800 text-4xl" />
        </motion.div>
        <motion.div className="absolute top-1/3 right-12" animate={{ rotate: [0, 180, 0], scale: [1, 1.1, 1] }} transition={{ duration: 7, repeat: Infinity }}>
          <FaShieldAlt className="text-gray-800 text-4xl" />
        </motion.div>
      </div>

      {/* SECTION HERO */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 z-10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-black mb-6 leading-tight"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              style={{
                background: "linear-gradient(-45deg, #22c55e, #3b82f6, #8b5cf6, #f59e0b, #ef4444)",
                backgroundSize: "400% 400%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
            >
              Créez des Web Apps
              <br />
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                sans coder
              </span>
            </motion.h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Maîtrisez l'art de créer des applications web modernes et professionnelles 
            <span className="text-green-400 font-semibold"> directement depuis votre téléphone</span> ! 
            Formation 100% pratique avec support WhatsApp permanent.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 flex items-center gap-3 shadow-2xl shadow-green-500/30"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px rgba(34, 197, 94, 0.4)" 
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <FaWhatsapp className="text-xl" />
              </motion.div>
              Commencer maintenant
              <motion.div
                className="group-hover:translate-x-1 transition-transform"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.div>
            </motion.a>

            <motion.button
              className="group bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center gap-3 border border-gray-600 hover:border-gray-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <FaPlay className="text-green-400" />
              </motion.div>
              Voir la démo
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* SECTION AVANTAGES */}
      <section className="relative py-24 px-4 z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Pourquoi choisir KEJA Academy ?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Une approche révolutionnaire pour apprendre le développement web moderne
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FaSmartphone,
                title: "Formation Mobile-First",
                description: "Apprenez directement depuis votre smartphone. Créez vos premières apps en quelques clics !",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: FaWhatsapp,
                title: "Support WhatsApp 24/7",
                description: "Assistance permanente via WhatsApp. Jamais seul dans votre apprentissage !",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: FaRocket,
                title: "Résultats Rapides",
                description: "Vos premières applications en ligne en moins de 48h. Garantie satisfait ou remboursé !",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: FaGraduationCap,
                title: "Certificat Reconnu",
                description: "Certificat professionnel à la fin de la formation. Boostez votre CV !",
                color: "from-yellow-500 to-orange-500"
              },
              {
                icon: FaUsers,
                title: "Communauté Active",
                description: "Rejoignez une communauté de plus de 500 développeurs motivés !",
                color: "from-red-500 to-rose-500"
              },
              {
                icon: FaHeart,
                title: "Passion & Excellence",
                description: "Formateurs passionnés avec +5 ans d'expérience en développement web.",
                color: "from-indigo-500 to-purple-500"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                }}
                className="group bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-2xl hover:shadow-gray-800/50"
              >
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 3 + index,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} mb-6 shadow-lg`}
                >
                  <item.icon className="text-2xl text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-green-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION TÉMOIGNAGES */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-black to-gray-900 z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Ils nous font confiance
            </h2>
            <div className="flex items-center justify-center gap-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    delay: i * 0.1,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  <FaStar className="text-3xl text-yellow-400" />
                </motion.div>
              ))}
            </div>
            <p className="text-xl text-gray-400">Note moyenne: 4.9/5 - Plus de 500 étudiants satisfaits</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Marie Kouassi",
                role: "Développeuse Web",
                text: "Incroyable ! J'ai créé mon premier site e-commerce en 3 jours seulement. Le support WhatsApp est exceptionnel !",
                rating: 5
              },
              {
                name: "Jean Baptiste",
                role: "Entrepreneur",
                text: "Formation révolutionnaire ! J'ai pu créer l'app de mon business sans connaissances techniques. Merci KEJA !",
                rating: 5
              },
              {
                name: "Fatou Traoré",
                role: "Étudiante",
                text: "Le meilleur investissement de ma vie ! En 2 semaines, je maîtrise React et j'ai déjà 3 projets en ligne.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateX: 5
                }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-green-500/50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-green-500/20"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ 
                        rotate: [0, 360],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 3,
                        delay: i * 0.1 + index * 0.5,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    >
                      <FaStar className="text-yellow-400" />
                    </motion.div>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <motion.div 
                    className="w-12 h-12 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center font-bold text-white text-lg"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 10, repeat: Infinity }}
                  >
                    {testimonial.name.charAt(0)}
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION CTA FINAL */}
      <section className="relative py-24 px-4 bg-gradient-to-br from-green-900/20 to-blue-900/20 z-10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-8 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Prêt à transformer votre avenir ?
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
              Rejoignez la révolution du développement mobile et créez des applications qui changent des vies !
            </p>
            
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-gradient-to-r from-green-500 via-green-600 to-emerald-600 hover:from-green-600 hover:via-green-700 hover:to-emerald-700 text-white px-12 py-6 rounded-full text-xl font-black transition-all duration-500 shadow-2xl shadow-green-500/40 hover:shadow-green-500/60"
              whileHover={{ 
                scale: 1.1,
                boxShadow: "0 30px 60px rgba(34, 197, 94, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0 20px 40px rgba(34, 197, 94, 0.3)",
                  "0 25px 50px rgba(34, 197, 94, 0.5)",
                  "0 20px 40px rgba(34, 197, 94, 0.3)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <motion.div
                animate={{ 
                  rotate: [0, 15, -15, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <FaWhatsapp className="text-3xl" />
              </motion.div>
              Commencer maintenant
              <motion.div
                animate={{ 
                  x: [0, 10, 0],
                  rotate: [0, 20, 0]
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-2xl"
              >
                🚀
              </motion.div>
            </motion.a>

            <div className="mt-8 flex items-center justify-center gap-8 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ✓
                </motion.div>
                Support 24/7
              </div>
              <div className="flex items-center gap-2">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
                >
                  ✓
                </motion.div>
                Garantie Satisfait
              </div>
              <div className="flex items-center gap-2">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, delay: 1, repeat: Infinity }}
                >
                  ✓
                </motion.div>
                Certificat Inclus
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-800 bg-black z-10 relative">
        <div className="max-w-7xl mx-auto px-4 py-8 text-center">
          <motion.div 
            className="flex items-center justify-center gap-2 mb-4"
            animate={{ 
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <div className="h-6 w-6 rounded-lg bg-gradient-to-br from-green-400 to-green-600" />
            <span className="text-lg font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              KEJA Academy
            </span>
          </motion.div>
          <p className="text-gray-500 text-sm">© 2025 KEJA Academy - Créer sans limite</p>
        </div>
      </footer>

      {/* ICÔNE WHATSAPP FLOTTANTE */}
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl shadow-green-500/30"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          y: [0, -10, 0],
          boxShadow: [
            "0 20px 25px -5px rgba(34, 197, 94, 0.3), 0 10px 10px -5px rgba(34, 197, 94, 0.1)",
            "0 25px 35px -5px rgba(34, 197, 94, 0.4), 0 15px 15px -5px rgba(34, 197, 94, 0.2)",
            "0 20px 25px -5px rgba(34, 197, 94, 0.3), 0 10px 10px -5px rgba(34, 197, 94, 0.1)"
          ]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <FaWhatsapp className="text-2xl" />
      </motion.a>
    </div>
  );
}

export default App;