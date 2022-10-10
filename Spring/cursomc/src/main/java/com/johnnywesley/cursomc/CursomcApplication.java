package com.johnnywesley.cursomc;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.johnnywesley.cursomc.domain.Categoria;
import com.johnnywesley.cursomc.domain.Cidade;
import com.johnnywesley.cursomc.domain.Cliente;
import com.johnnywesley.cursomc.domain.Endereco;
import com.johnnywesley.cursomc.domain.Estado;
import com.johnnywesley.cursomc.domain.Produto;
import com.johnnywesley.cursomc.domain.enums.TipoCliente;
import com.johnnywesley.cursomc.repositories.CategoriaRepository;
import com.johnnywesley.cursomc.repositories.CidadeRepository;
import com.johnnywesley.cursomc.repositories.ClienteRepository;
import com.johnnywesley.cursomc.repositories.EnderecoRepository;
import com.johnnywesley.cursomc.repositories.EstadoRepository;
import com.johnnywesley.cursomc.repositories.ProdutoRepository;

@SpringBootApplication
public class CursomcApplication implements CommandLineRunner {
	
	@Autowired
	private CategoriaRepository categoriaRepository;
	
	@Autowired
	private ProdutoRepository produtoRepository;
	
	@Autowired
	private CidadeRepository cidadeRepository;
	
	@Autowired 
	private EstadoRepository estadoRepository;
	
	@Autowired
	private ClienteRepository clienteRepository;
	
	@Autowired
	private EnderecoRepository enderecoRepository;
	

	public static void main(String[] args) {
		SpringApplication.run(CursomcApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		Categoria cat1 = new Categoria(null, "Informática");
		Categoria cat2 = new Categoria(null, "Escritório");
		
		Produto p1 = new Produto(null, "Computador", 2000.00);
		Produto p2 = new Produto(null, "Impressora", 800.00);
		Produto p3 = new Produto(null, "Mouse", 80.00);
		
		cat1.getProdutos().addAll(Arrays.asList(p1, p2, p3));
		cat2.getProdutos().addAll(Arrays.asList(p2));
		
		p1.getCategorias().addAll(Arrays.asList(cat1));
		p2.getCategorias().addAll(Arrays.asList(cat1, cat2));
		p3.getCategorias().addAll(Arrays.asList(cat1));
		

		categoriaRepository.saveAll(Arrays.asList(cat1, cat2));
		produtoRepository.saveAll(Arrays.asList(p1, p2, p3));
		
		Estado estado1 = new Estado(null, "Minas Gerais");
		Estado estado2 = new Estado(null, "São Paulo");
		
		
		Cidade cidade1 = new Cidade(null, "Uberlândia", estado1);
		Cidade cidade2 = new Cidade(null, "São Paulo", estado2);
		Cidade cidade3 = new Cidade(null, "Campinas", estado2);
		
		
		estado1.getCidades().add(cidade1);
		estado2.getCidades().addAll(Arrays.asList(cidade2, cidade3));
		
		estadoRepository.saveAll(Arrays.asList(estado1, estado2));
		cidadeRepository.saveAll(Arrays.asList(cidade1, cidade2, cidade3));
		
		Cliente cl1 = new Cliente(null, "Maria Silva", "maria@gmail.com", "123.456.789-10", TipoCliente.PESSOAFISICA);
		cl1.getTelefones().addAll(Arrays.asList("237852364", "123845647"));
		
		Endereco e1 = new Endereco(null, "Rua Flores", "300", "Apto 303", "Jardim", "38220834", cl1, cidade1);
		Endereco e2 = new Endereco(null, "Avenida Matos", "105", "Sala 800", "Centro", "38222012", cl1, cidade2);
		cl1.getEnderecos().addAll(Arrays.asList(e1, e2));
		
		clienteRepository.save(cl1);
		enderecoRepository.saveAll(Arrays.asList(e1, e2));
		
	}

}
