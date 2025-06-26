import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, HardHat, Users, CheckCircle, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function ClientsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">TPG</span>
            </div>
            <span className="font-bold text-xl text-gray-900">The Partnership Group</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-emerald-600 font-medium">
              Home
            </Link>
            <Link href="/why-us" className="text-gray-700 hover:text-emerald-600 font-medium">
              Why Us
            </Link>
            <Link href="/jobs" className="text-gray-700 hover:text-emerald-600 font-medium">
              Jobs
            </Link>
            <Link href="/clients" className="text-emerald-600 font-medium">
              Clients
            </Link>
            <Link href="/candidates" className="text-gray-700 hover:text-emerald-600 font-medium">
              Candidates
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-emerald-600 font-medium">
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-3">
            <Button variant="outline" className="bg-white text-emerald-600 border-emerald-600 hover:bg-emerald-50">
              <Link href="/register-job">Post a Job</Link>
            </Button>
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              <Link href="/register-candidate">Find Jobs</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-20">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Partner with Australia's Leading{" "}
                <span className="text-emerald-600">Healthcare or Construction Recruiters</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Specialist recruitment services for hospitals, aged care facilities, community health centres,
                construction companies, infrastructure firms, and building contractors across Australia. We deliver
                qualified healthcare professionals or skilled construction workers who meet your exact requirements and
                cultural fit.
              </p>
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8 py-3">
                <Link href="/register-job" className="flex items-center">
                  Start Hiring Healthcare or Construction Staff Today <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Industry Specializations */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Industry Specializations</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Deep expertise in two critical industries where skilled professionals make all the difference
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Healthcare */}
              <div className="space-y-8">
                <Card className="border-0 shadow-xl">
                  <CardHeader className="pb-4">
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                        <Heart className="h-8 w-8 text-red-600" />
                      </div>
                      <div>
                        <CardTitle className="text-3xl text-gray-900">Healthcare Recruitment Australia</CardTitle>
                        <p className="text-gray-600">
                          Connecting caring professionals with leading healthcare organisations
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-gray-600 text-lg">
                      Australia's premier healthcare recruitment specialists serving public hospitals, private
                      healthcare facilities, aged care providers, community health centres, general practices, and
                      specialist medical clinics across all states and territories.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h4 className="font-semibold text-gray-900 text-lg">Nursing Recruitment Services</h4>
                        <ul className="space-y-2 text-gray-600">
                          <li>✓ Registered Nurses - ICU, Emergency, Theatre, Ward</li>
                          <li>✓ Enrolled Nurses - Acute Care & Aged Care</li>
                          <li>✓ Nurse Practitioners & Clinical Nurse Consultants</li>
                          <li>✓ Midwives & Maternal Child Health Nurses</li>
                          <li>✓ Mental Health Nurses & Community Nurses</li>
                          <li>✓ Nurse Unit Managers & Clinical Supervisors</li>
                          <li>✓ Graduate Nurse Program Placements</li>
                          <li>✓ Locum & Agency Nursing Staff</li>
                        </ul>
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-semibold text-gray-900 text-lg">Allied Health Professional Recruitment</h4>
                        <ul className="space-y-2 text-gray-600">
                          <li>✓ Physiotherapists & Exercise Physiologists</li>
                          <li>✓ Occupational Therapists & Hand Therapists</li>
                          <li>✓ Speech Pathologists & Audiologists</li>
                          <li>✓ Social Workers & Mental Health Clinicians</li>
                          <li>✓ Dietitians & Diabetes Educators</li>
                          <li>✓ Podiatrists & Orthotists</li>
                          <li>✓ Medical Imaging Technologists</li>
                          <li>✓ Laboratory Scientists & Technicians</li>
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-gray-900 text-lg">Healthcare Management & Administration</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <ul className="space-y-2 text-gray-600">
                          <li>✓ Healthcare Managers & Department Heads</li>
                          <li>✓ Quality & Risk Management Officers</li>
                          <li>✓ Clinical Governance Specialists</li>
                          <li>✓ Healthcare Project Managers</li>
                        </ul>
                        <ul className="space-y-2 text-gray-600">
                          <li>✓ Medical Receptionists & Administration</li>
                          <li>✓ Health Information Managers</li>
                          <li>✓ Patient Services Coordinators</li>
                          <li>✓ Healthcare Finance & HR Professionals</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-red-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-red-900 mb-3">Healthcare Recruitment Specialisation</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <ul className="space-y-2 text-red-800">
                          <li>✓ AHPRA registration verification & compliance</li>
                          <li>✓ Clinical competency assessment & skills matching</li>
                          <li>✓ Professional indemnity insurance verification</li>
                          <li>✓ CPD requirements & ongoing education support</li>
                        </ul>
                        <ul className="space-y-2 text-red-800">
                          <li>✓ Healthcare facility cultural fit evaluation</li>
                          <li>✓ Shift work & roster flexibility assessment</li>
                          <li>✓ Specialty experience & patient population matching</li>
                          <li>✓ Career progression pathway planning</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-3">Healthcare Sectors We Service</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-600">
                        <ul className="space-y-1">
                          <li>• Public Hospitals</li>
                          <li>• Private Hospitals</li>
                          <li>• Day Surgery Centres</li>
                        </ul>
                        <ul className="space-y-1">
                          <li>• Aged Care Facilities</li>
                          <li>• Disability Services</li>
                          <li>• Home Care Providers</li>
                        </ul>
                        <ul className="space-y-1">
                          <li>• General Practices</li>
                          <li>• Specialist Clinics</li>
                          <li>• Medical Centres</li>
                        </ul>
                        <ul className="space-y-1">
                          <li>• Community Health</li>
                          <li>• Mental Health Services</li>
                          <li>• Rehabilitation Centres</li>
                        </ul>
                      </div>
                    </div>

                    <Button className="w-full bg-red-600 hover:bg-red-700 text-lg py-3">
                      <Link href="/register-job">Hire Healthcare Professionals Australia</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Construction */}
              <div className="space-y-8">
                <Card className="border-0 shadow-xl">
                  <CardHeader className="pb-4">
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                        <HardHat className="h-8 w-8 text-orange-600" />
                      </div>
                      <div>
                        <CardTitle className="text-3xl text-gray-900">Construction Recruitment Australia</CardTitle>
                        <p className="text-gray-600">
                          Building exceptional teams for Australia's construction industry
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-gray-600 text-lg">
                      Leading construction recruitment specialists serving major builders, infrastructure companies,
                      civil contractors, residential developers, commercial construction firms, and engineering
                      consultancies across Australia's booming construction sector.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h4 className="font-semibold text-gray-900 text-lg">Construction Management Recruitment</h4>
                        <ul className="space-y-2 text-gray-600">
                          <li>✓ Project Managers - Residential & Commercial</li>
                          <li>✓ Construction Managers & Site Managers</li>
                          <li>✓ Site Supervisors & Leading Hands</li>
                          <li>✓ Contract Administrators & Project Coordinators</li>
                          <li>✓ Quantity Surveyors & Cost Estimators</li>
                          <li>✓ Building Surveyors & Quality Managers</li>
                          <li>✓ Safety Officers & WHS Coordinators</li>
                          <li>✓ Construction Planners & Schedulers</li>
                        </ul>
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-semibold text-gray-900 text-lg">Engineering & Technical Recruitment</h4>
                        <ul className="space-y-2 text-gray-600">
                          <li>✓ Civil Engineers & Structural Engineers</li>
                          <li>✓ Mechanical Engineers & Electrical Engineers</li>
                          <li>✓ Geotechnical Engineers & Environmental Engineers</li>
                          <li>✓ Building Services Engineers & Fire Engineers</li>
                          <li>✓ CAD Operators & Design Technicians</li>
                          <li>✓ Town Planners & Development Managers</li>
                          <li>✓ Architects & Building Designers</li>
                          <li>✓ Engineering Consultants & Specialists</li>
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-gray-900 text-lg">Skilled Trades & Labour Recruitment</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <h5 className="font-medium text-gray-800 mb-2">Electrical Trades</h5>
                          <ul className="space-y-1 text-gray-600">
                            <li>• Electricians (A Grade)</li>
                            <li>• Electrical Supervisors</li>
                            <li>• Instrumentation Technicians</li>
                            <li>• Data & Communications</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-800 mb-2">Mechanical Trades</h5>
                          <ul className="space-y-1 text-gray-600">
                            <li>• Plumbers & Gasfitters</li>
                            <li>• Mechanical Fitters</li>
                            <li>• HVAC Technicians</li>
                            <li>• Refrigeration Mechanics</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-800 mb-2">Building Trades</h5>
                          <ul className="space-y-1 text-gray-600">
                            <li>• Carpenters & Joiners</li>
                            <li>• Cabinet Makers</li>
                            <li>• Bricklayers & Blocklayers</li>
                            <li>• Concreters & Tilers</li>
                          </ul>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                        <div>
                          <h5 className="font-medium text-gray-800 mb-2">Heavy Equipment</h5>
                          <ul className="space-y-1 text-gray-600">
                            <li>• Crane Operators</li>
                            <li>• Excavator Operators</li>
                            <li>• Dozer & Grader Operators</li>
                            <li>• Truck Drivers (HC/MC)</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-800 mb-2">Specialist Trades</h5>
                          <ul className="space-y-1 text-gray-600">
                            <li>• Scaffolders</li>
                            <li>• Steel Fixers</li>
                            <li>• Riggers & Dogmen</li>
                            <li>• Welders (Coded)</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-800 mb-2">General Labour</h5>
                          <ul className="space-y-1 text-gray-600">
                            <li>• Construction Labourers</li>
                            <li>• Traffic Controllers</li>
                            <li>• Cleaners & Maintenance</li>
                            <li>• Apprentices & Trainees</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-orange-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-orange-900 mb-3">Construction Recruitment Specialisation</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <ul className="space-y-2 text-orange-800">
                          <li>✓ Trade qualification verification & licensing</li>
                          <li>✓ White card & safety certification checks</li>
                          <li>✓ High risk work licences verification</li>
                          <li>✓ Project experience matching & skills assessment</li>
                        </ul>
                        <ul className="space-y-2 text-orange-800">
                          <li>✓ Construction industry knowledge & networks</li>
                          <li>✓ FIFO & interstate placement services</li>
                          <li>✓ Union & EBA compliance understanding</li>
                          <li>✓ Major project & infrastructure experience</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-3">Construction Sectors We Service</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-600">
                        <ul className="space-y-1">
                          <li>• Residential Building</li>
                          <li>• Commercial Construction</li>
                          <li>• High-Rise Development</li>
                        </ul>
                        <ul className="space-y-1">
                          <li>• Civil Infrastructure</li>
                          <li>• Road & Bridge Construction</li>
                          <li>• Rail & Transport Projects</li>
                        </ul>
                        <ul className="space-y-1">
                          <li>• Mining & Resources</li>
                          <li>• Oil & Gas Projects</li>
                          <li>• Power & Utilities</li>
                        </ul>
                        <ul className="space-y-1">
                          <li>• Industrial Construction</li>
                          <li>• Maintenance & Shutdowns</li>
                          <li>• Fit-out & Refurbishment</li>
                        </ul>
                      </div>
                    </div>

                    <Button className="w-full bg-orange-600 hover:bg-orange-700 text-lg py-3">
                      <Link href="/register-job">Hire Construction Professionals Australia</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Recruitment Process</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A proven methodology that delivers exceptional results for our clients
              </p>
            </div>

            <div className="grid lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-emerald-600">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Discovery</h3>
                <p className="text-gray-600">
                  We dive deep into your requirements, culture, and specific needs to understand exactly what you're
                  looking for.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-emerald-600">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Sourcing</h3>
                <p className="text-gray-600">
                  Using our extensive networks and proven sourcing strategies, we identify and attract top-tier
                  candidates.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-emerald-600">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Screening</h3>
                <p className="text-gray-600">
                  Rigorous assessment including skills evaluation, cultural fit analysis, and comprehensive reference
                  checks.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-emerald-600">4</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Placement</h3>
                <p className="text-gray-600">
                  We facilitate the entire placement process and provide ongoing support to ensure long-term success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Why Partner with The Partnership Group?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <CheckCircle className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Industry Expertise</h4>
                      <p className="text-gray-600">
                        Deep knowledge of Healthcare and Construction sectors means we understand your specific
                        challenges and requirements.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <CheckCircle className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">National Network</h4>
                      <p className="text-gray-600">
                        Access to talent across all Australian states and territories through our extensive professional
                        networks.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <CheckCircle className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Quality Guarantee</h4>
                      <p className="text-gray-600">
                        Our rigorous screening process and replacement guarantee ensure you get the right person for the
                        role.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <CheckCircle className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Fast Turnaround</h4>
                      <p className="text-gray-600">
                        Streamlined processes and dedicated account management deliver results faster than traditional
                        recruitment methods.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Client benefits illustration"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
              <p className="text-xl text-gray-600">Trusted by leading organizations across Australia</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                      <Heart className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Sydney Healthcare Group</div>
                      <div className="text-gray-600 text-sm">Healthcare</div>
                    </div>
                  </div>
                  <p className="text-gray-600 italic mb-4">
                    "TPG transformed our nursing recruitment. Their understanding of healthcare requirements and ability
                    to find candidates who fit our culture has been exceptional."
                  </p>
                  <div className="text-sm text-gray-500">- Sarah Mitchell, HR Director</div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                      <HardHat className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Premier Construction Group</div>
                      <div className="text-gray-600 text-sm">Construction</div>
                    </div>
                  </div>
                  <p className="text-gray-600 italic mb-4">
                    "Working with The Partnership Group has been a game-changer. They consistently deliver skilled
                    professionals who hit the ground running on our projects."
                  </p>
                  <div className="text-sm text-gray-500">- David Thompson, Operations Manager</div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                      <Users className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Australian Hospital Network</div>
                      <div className="text-gray-600 text-sm">Healthcare</div>
                    </div>
                  </div>
                  <p className="text-gray-600 italic mb-4">
                    "Their national reach helped us fill critical positions across multiple locations. The quality of
                    candidates and speed of service is unmatched."
                  </p>
                  <div className="text-sm text-gray-500">- Dr. Rebecca Walsh, Chief Medical Officer</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-emerald-600">
          <div className="container mx-auto px-4 lg:px-6 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Build Your Dream Team?</h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Let us help you find the exceptional talent your organization needs to thrive. Get started today with
              Australia's premier recruitment partnership.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-emerald-600 border-white hover:bg-emerald-50 text-lg px-8 py-3"
              >
                <Link href="/register-job">Post Your First Job</Link>
              </Button>
              <Button size="lg" className="bg-emerald-800 hover:bg-emerald-900 text-lg px-8 py-3">
                <Link href="/contact">Speak to Our Team</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">TPG</span>
                </div>
                <span className="font-bold text-xl">The Partnership Group</span>
              </div>
              <p className="text-gray-400">
                Australia's premier recruitment partnership, connecting talent with opportunity across Healthcare or
                Construction.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/why-us" className="hover:text-white">
                    Why Us
                  </Link>
                </li>
                <li>
                  <Link href="/jobs" className="hover:text-white">
                    Current Jobs
                  </Link>
                </li>
                <li>
                  <Link href="/clients" className="hover:text-white">
                    For Clients
                  </Link>
                </li>
                <li>
                  <Link href="/candidates" className="hover:text-white">
                    For Candidates
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Industries</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Healthcare</li>
                <li>Construction</li>
                <li>Allied Health</li>
                <li>Project Management</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="text-gray-400 space-y-2">
                <p>1300 TPG JOBS</p>
                <p>info@partnershipgroup.com.au</p>
                <p>
                  Level 15, 1 Martin Place
                  <br />
                  Sydney NSW 2000
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} The Partnership Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
