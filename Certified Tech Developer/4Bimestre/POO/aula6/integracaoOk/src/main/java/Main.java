import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.SAXException;

import javax.persistence.EntityManager;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.List;

public class Main {
    private static PacienteDAO pacienteDAO;
    private Paciente paciente;

    private  static PacienteExame pacienteExame;
    private identificaExames identificaExames;

    public Main() {
    }

    public static void main(String[] args){

        try {
            DocumentBuilderFactory docFactory = DocumentBuilderFactory.newInstance();
            DocumentBuilder docBuilder = docFactory.newDocumentBuilder();
            Document doc = docBuilder.parse("D:\\projetos\\integracao\\EscreverLerXMLcomJava\\result.xml");

            NodeList listaPacientes = doc.getElementsByTagName("paciente");

            for(int i = 0; i< listaPacientes.getLength(); i++){
                Node nodePac = listaPacientes.item(i);
                if(nodePac.getNodeType() == Node.ELEMENT_NODE){
                    Paciente pac = new Paciente();
                    Element elementPac = (Element) nodePac;
                    pac.setIdPaciente(Long.valueOf(elementPac.getAttribute("codigo")));
                    pac.setNome(elementPac.getAttribute("nome"));
                    pac.setCpf(elementPac.getAttribute("codigo_lis"));
//                    new PacienteDAO().inserir(pac);
                }
            }

            NodeList listaSolicitacao = doc.getElementsByTagName("solicitacao");
            for(int i = 0; i < listaSolicitacao.getLength(); i++){
                Node nodeSolicitacao = listaSolicitacao.item(i);
                if(nodeSolicitacao.getNodeType() == Node.ELEMENT_NODE){
                    Element elementSolicitacao = (Element) nodeSolicitacao;
                    String codigoPac = elementSolicitacao.getAttribute("paciente");
                    NodeList listaExames = elementSolicitacao.getElementsByTagName("exame");

                    for(int count = 0; count < listaExames.getLength(); count++){

                        Node nodeExame = listaExames.item(count);
                        if(nodeSolicitacao.getNodeType() == Node.ELEMENT_NODE){
                            Element elementExame = (Element) nodeExame;
                            String dataResultado = elementExame.getAttribute("dataresultado");
                            NodeList listaResultados = elementExame.getElementsByTagName("resultado");
                            for(int results = 0; results < listaResultados.getLength(); results++ ){
                                pacienteExame = new PacienteExame();
                               Node nodeResultado = listaResultados.item(results);
                               if(nodeResultado.getNodeType() == Node.ELEMENT_NODE){
                                   Element elementResultado = (Element) nodeResultado;
//                                   pacienteExame.setIdPaciente(codigoPac);
//                                   pacienteExame.setDataResultado(dataResultado);
//                                   pacienteExame.setIdCodAlvaro(elementResultado.getAttribute("linharesultado"));
//                                   pacienteExame.setResultado(elementResultado.getAttribute("resultado"));
//                                   System.out.println(elementExame.getAttribute("codigo"));
//                                   System.out.println(pacienteExame.getIdPaciente());
//                                   System.out.println(pacienteExame.getDataResultado());
//                                   System.out.println(pacienteExame.getResultado());
//                                   new PacienteExameDAO().inserir(pacienteExame);
                               }

                            }

                        }
                    }
                    try{
                        File myObj = new File("filename.txt");
                        if (myObj.createNewFile()) {
                            System.out.println("File created: " + myObj.getName());
                        } else {
                            System.out.println("File already exists.");
                        }

                    }catch (IOException e){
                        System.out.println("Error");
                        e.printStackTrace();
                    }
                     List<PacienteExame> pacienteExameList;
                    pacienteExameList = new PacienteExameDAO().getResults((Long.valueOf(codigoPac)));
                    for(PacienteExame p : pacienteExameList){
                        FileWriter myWriter = new FileWriter("filename.txt");
                        myWriter.write(p.getIdPaciente().getNome());
                        myWriter.write("         ");
//                        myWriter.write(p.get);
                        myWriter.write(p.getDataResultado().split(" ")[0]);
                        myWriter.close();
                    }
                }
            }

        } catch (ParserConfigurationException e) {
            throw new RuntimeException(e);
        }
        catch(IOException e){
            System.out.println(e);
        }
        catch(SAXException e){
            System.out.println(e);
        }
    }
}
